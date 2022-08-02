import { Typography, Ad } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useRef } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Router from "next/router";

// Relative imports
import {
  getLocationFields,
  getLocationValue,
  indicateWrongLocation,
  isLocationValid,
  parseLocation,
} from "../../../public/lib/locationOperations";
import getTexts from "../../../public/texts/texts";
import UserContext from "../context/UserContext";
import Form from "../general/Form";

const useStyles = makeStyles((theme) => ({
  orgBottomLink: {
    textAlign: "center",
    marginTop: theme.spacing(0.5),
  },

  bottomLinkFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(0.5),
  },

  bold: {
    fontWeight: "bold",
  },

  appealText: {
    textAlign: "center",
  },
  appealBox: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  form: {
    maxWidth: 700,
    margin: "0 auto",
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2),
  },
  infoIcon: {
    marginRight: theme.spacing(0.5),
  },
  field: {
    marginTop: theme.spacing(3),
  },
}));

export default function Share({
  project,
  handleSetProjectData,
  goToNextStep,
  userOrganizations,
  setMessage,
}) {
  const classes = useStyles();
  const { locale } = useContext(UserContext);
  const texts = getTexts({ page: "project", locale: locale });
  const locationInputRef = useRef(null);
  const [locationOptionsOpen, setLocationOptionsOpen] = React.useState(false);

  const handleSetLocationOptionsOpen = (bool) => {
    setLocationOptionsOpen(bool);
  };

  const handleCreateOrgButton = () => {
    Router.push("/createorganization");
  };

  const organizations = !userOrganizations
    ? []
    : userOrganizations.map((org) => {
        return {
          key: org.url_slug,
          ...org,
        };
      });
  const organizationOptions = [...organizations];
  const parent_organization_name = project.parent_organization
    ? project.parent_organization.name
      ? project.parent_organization.name
      : project.parent_organization
    : "";

  function getFields(isPartOfOrg) {
    const fields = isPartOfOrg
      ? [
          switchField(texts, project),
          parentOrganizationField(
            texts,
            parent_organization_name,
            organizationOptions,
            classes.orgBottomLink
          ),
          getNameField(isPartOfOrg, texts, project),
          ...locationField(
            texts,
            project,
            handleSetLocationOptionsOpen,
            locationOptionsOpen,
            locationInputRef,
            isPartOfOrg
          ),
        ]
      : [
          switchField(texts, project),
          getNameField(isPartOfOrg, texts, project),
          ...locationField(
            texts,
            project,
            handleSetLocationOptionsOpen,
            locationOptionsOpen,
            locationInputRef,
            isPartOfOrg
          ),
          buttonField(texts, isPartOfOrg, handleCreateOrgButton),
        ];

    return fields;
  }

  const legacyModeEnabled = process.env.ENABLE_LEGACY_LOCATION_FORMAT === "true";
  const fields = getFields(!!userOrganizations);

  const messages = {
    submitMessage: texts.next_step,
  };

  const getOrgObject = (org) => {
    return userOrganizations.find((o) => o.name === org);
  };

  const onSubmit = (event, values) => {
    event.preventDefault();
    Object.keys(values).map(
      (k) =>
        (values[k] =
          values[k] && values[k] != true && typeof values[k] !== "object"
            ? values[k].trim()
            : values[k])
    );
    //Short circuit if the location is not valid and we're not in legacy mode
    if (!legacyModeEnabled && !isLocationValid(values.loc)) {
      indicateWrongLocation(locationInputRef, setLocationOptionsOpen, setMessage, texts);
      return;
    }
    const loc_value = getLocationValue(values, "loc");
    const loc = parseLocation(loc_value);
    if (!values.parent_organization) {
      handleSetProjectData({
        ...values,
        loc: loc,
        isPersonalProject: true,
      });
    } else {
      handleSetProjectData({
        ...values,
        loc: loc,
        parent_organization: getOrgObject(values.parent_organization),
        isPersonalProject: false,
      });
    }
    goToNextStep();
  };
  return (
    <>
      {locale === "en" && (
        <div className={classes.appealBox}>
          <Typography color="secondary" className={classes.appealText}>
            Please make sure to{" "}
            <Typography component="span" className={classes.bold}>
              only use English when sharing a project
            </Typography>
            .
          </Typography>
          <Typography className={classes.appealText}>
            This enables more people to contribute to your ideas and experiences to fight climate
            change together!
          </Typography>
        </div>
      )}

      <Form
        className={classes.form}
        fields={fields}
        messages={messages}
        onSubmit={onSubmit}
        alignButtonsRight
        fieldClassName={classes.field}
        hideSubmitButton={!!userOrganizations}
      />
    </>
  );
}
const buttonField = (texts, isPartOfOrg, handleCreateOrgButton) => {
  const field = {
    type: "button",
    onClick: handleCreateOrgButton,
    label: "Create Org",
    variant: "contained",
    fullWidth: true,
    color: "primary",
    startIcon: <AddCircleOutlineIcon></AddCircleOutlineIcon>,
    ...(!isPartOfOrg && {
      onlyShowIfFieldHasValue: {
        value: "is_organization_project",
      },
    }),
  };
  return field;
};

const switchField = (texts, project) => {
  return {
    falseLabel: texts.personal_project,
    trueLabel: texts.organizations_project,
    key: "is_organization_project",
    type: "switch",
    checked: project.is_organization_project,
  };
};

const parentOrganizationField = (
  texts,
  parentOrganizatioName,
  organizationOptions,
  orgBottomLink
) => {
  return {
    required: true,
    label: texts.organization,
    select: {
      values: organizationOptions,
      defaultValue: parentOrganizatioName,
    },
    key: "parent_organization",
    bottomLink: (
      <Typography className={orgBottomLink}>
        {texts.if_your_organization_does_not_exist_yet_click_here}
      </Typography>
    ),
    onlyShowIfFieldHasValue: {
      value: "is_organization_project",
    },
  };
};

// always show if personal project, hide if org project and is not part of org
const getNameField = (isPartOfOrg, texts, project) => {
  const field = {
    required: true,
    label: texts.title_with_explanation_and_example,
    type: "text",
    key: "name",
    value: project.name,
    ...(!isPartOfOrg && {
      onlyShowIfFieldHasValue: {
        value: "is_organization_project",
      },
    }),
  };

  return field;
};

//TODO: add onlyShowIfUnchecked as custom property to location fields
const locationField = (
  texts,
  project,
  handleSetLocationOptionsOpen,
  locationOptionsOpen,
  locationInputRef,
  isPartOfOrg
) => {
  return getLocationFields({
    locationInputRef: locationInputRef,
    locationOptionsOpen: locationOptionsOpen,
    handleSetLocationOptionsOpen: handleSetLocationOptionsOpen,
    values: project,
    locationKey: "loc",
    texts: texts,
    isPartOfOrg: isPartOfOrg,
    value: "is_organization_project",
  });
};
