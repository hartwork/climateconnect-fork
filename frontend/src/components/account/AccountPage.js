import {
  Avatar,
  Button,
  Chip,
  Container,
  Link,
  Tooltip,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlaceIcon from "@material-ui/icons/Place";
import React, { useContext } from "react";
import Linkify from "react-linkify";
import Cookies from "universal-cookie";

import { getLocalePrefix } from "../../../public/lib/apiOperations";
import DetailledDescription from "./DetailledDescription";
import getTexts from "../../../public/texts/texts";
import MessageContent from "../communication/MessageContent";
import MiniHubPreviews from "../hub/MiniHubPreviews";
import MiniOrganizationPreview from "../organization/MiniOrganizationPreview";
import ProfileBadge from "../profile/ProfileBadge";
import SocialMediaShareButton from "../shareContent/SocialMediaShareButton";
import UserContext from "../context/UserContext";
import EditSharpIcon from "@material-ui/icons/EditSharp";
import IconButton from "@material-ui/core/IconButton";
import SocialMediaButton from "../general/SocialMediaButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(5),
      marginLeft: theme.spacing(5),
    },
  },
  avatar: {
    height: theme.spacing(20),
    width: theme.spacing(20),
    margin: "0 auto",
    marginTop: theme.spacing(-15),
    fontSize: 50,
    border: "4px solid white",
    backgroundcolor: "white",
    "& img": {
      objectFit: "contain",
      backgroundColor: "white",
    },
  },
  avatarWithInfo: {
    textAlign: "center",
    width: theme.spacing(40),
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      margin: 0,
      marginLeft: theme.spacing(-5),
      display: "inline-block",
      width: "auto",
    },
  },
  accountInfo: (props) => ({
    padding: 0,
    marginTop: theme.spacing(1),
    marginRight: props.isOwnAccount ? theme.spacing(0.5) : 0,
  }),
  editButtonWrapper: {
    flex: "1 0 auto",
  },
  name: {
    fontWeight: "bold",
    padding: theme.spacing(1),
    paddingLeft: 0,
    paddingRight: 0,
  },
  subtitle: {
    color: `${theme.palette.secondary.main}`,
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  content: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    color: `${theme.palette.secondary.main}`,
    fontSize: 16,
  },
  noPadding: {
    padding: 0,
  },
  infoContainer: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
    position: "relative",
  },
  noprofile: {
    textAlign: "center",
    padding: theme.spacing(5),
  },
  marginTop: {
    marginTop: theme.spacing(1),
  },
  chip: {
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  editButton: {
    position: "relative",
    cursor: "pointer",
    color: theme.palette.primary.main,
    width: "35px",
    height: "35px",
    marginRight: theme.spacing(0.5),
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
    borderRadius: "50%",
    padding: "5px",
    left: "0",
  },
  infoIcon: {
    marginBottom: -4,
  },
  innerIcon: {
    marginRight: theme.spacing(0.5),
    marginLeft: -theme.spacing(1),
  },
  detailledDescription: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  shareButtonContainer: {
    position: "relative",
    right: "0",
  },
  smallIconContainer: {
    position: "absolute",
    width: "auto",
    display: "flex",
    justifyContent: "space-between",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    right: "0%",
    bottom: "0%",
  },
  subOrgContainer: {
    display: "flex",
    alignItems: "center",
  },
  isSubOrgText: {
    marginRight: theme.spacing(1),
  },
  miniOrgPreview: {
    display: "flex",
  },
}));

//Generic component to display personal profiles or organization profiles
export default function AccountPage({
  account,
  default_background,
  editHref,
  /*
  object with properties that can be changed and their types (e.g. "summary" is a "text" type)
    E.g. for organizations this is generated by the function in public/data/organization_info_metadata.js
  */
  infoMetadata,
  children,
  isOwnAccount,
  isOrganization,
  editText,
  isTinyScreen,
  isSmallScreen,
}) {
  const classes = useStyles({ isOwnAccount: isOwnAccount });
  const { locale } = useContext(UserContext);
  const token = new Cookies().get("auth_token");
  const texts = getTexts({ page: "profile", locale: locale });
  const organizationTexts = isOrganization
    ? getTexts({ page: "organization", organization: account, locale: locale })
    : "Not an organization";
  const componentDecorator = (href, text, key) => (
    <Link
      color="primary"
      underline="always"
      href={href}
      key={key}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Link>
  );
  //console.log(account);

  const displayAccountInfo = (info) =>
    Object.keys(info)
      .sort((a, b) => {
        a = getFullInfoElement(infoMetadata, a, info[a]);
        b = getFullInfoElement(infoMetadata, b, info[b]);
        return b?.weight - a?.weight;
      })
      .map((key, index) => {
        if (info[key]) {
          const i = getFullInfoElement(infoMetadata, key, info[key]);
          const value = Array.isArray(i.value) ? i.value.join(", ") : i.value;
          const additionalText = i.additionalText ? i.additionalText : "";
          if (key === "parent_organization") {
            if (value.name)
              return (
                <div key={index} className={`${classes.subtitle} ${classes.subOrgContainer}`}>
                  <Typography className={classes.isSubOrgText}>
                    {account.name} {texts.is_a_suborganization_of}{" "}
                  </Typography>
                  <MiniOrganizationPreview
                    className={classes.miniOrgPreview}
                    organization={value}
                    size="small"
                  />
                </div>
              );
          } else if (i.type === "array" && i?.value?.length > 0) {
            return (
              <div key={index} className={classes.infoElement}>
                <div className={classes.subtitle}>{i.name}:</div>
                <div className={classes.chipArray}>
                  {i && i.value && i.value.length > 0
                    ? i.value.map((entry) => (
                        <Chip size="medium" label={entry} key={entry} className={classes.chip} />
                      ))
                    : i.missingMessage && <div className={classes.content}>{i.missingMessage}</div>}
                </div>
              </div>
            );
          } else if (i.linkify && value) {
            return (
              <>
                <div className={classes.subtitle}>{i.name}:</div>
                <Linkify componentDecorator={componentDecorator} key={index}>
                  <div className={classes.content}>{value}</div>
                </Linkify>
              </>
            );
          } else if (i.type === "bio" && value) {
            return (
              <div key={index} className={classes.content}>
                <MessageContent content={value ? value + additionalText : i.missingMessage} />
              </div>
            );
          } else if (i.type === "hubs") {
            return <MiniHubPreviews hubs={i.value} />;
          } else if (i.type === "select" && value) {
            const textValue = i.options ? i.options.find((o) => o?.key === value).name : value;
            return (
              <div key={index}>
                <div className={classes.subtitle}>{i.name}:</div>
                <div className={classes.content}>
                  {textValue ? textValue + additionalText : i.missingMessage}
                </div>
              </div>
            );
          } else if (value && !["detailled_description", "location", "checkbox"].includes(i.type)) {
            return (
              <div key={index}>
                <div className={classes.subtitle}>{i.name}:</div>
                <div className={classes.content}>
                  {value ? value + additionalText : i.missingMessage}
                </div>
              </div>
            );
          }
        }
      });
  const getDetailledDescription = () => {
    const detailled_description_obj = Object.keys(account.info).filter((i) => {
      const el = getFullInfoElement(infoMetadata, i, account.info[i]);
      return el.type === "detailled_description";
    });
    if (detailled_description_obj.length > 0) {
      const key = detailled_description_obj[0];
      return getFullInfoElement(infoMetadata, key, account.info[key]);
    } else return null;
  };
  const detailledDescription = getDetailledDescription();
  const locationKeys = Object.keys(account.info).filter((key) => {
    const infoElement = getFullInfoElement(infoMetadata, key, account.info[key]);
    return infoElement.type === "location";
  });
  const location = locationKeys.length > 0 ? account.info[locationKeys[0]] : null;
  const locationAdditionalText = location?.additionalText ? location.additionalText : "";

  const avatarProps = {
    alt: account.name,
    component: "div",
    size: "large",
    src: account.image,
    className: classes.avatar,
  };

  return (
    <Container maxWidth="lg" className={classes.noPadding}>
      <div
        style={{
          background: `url(${
            account.background_image ? account.background_image : default_background
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: 305,
          position: "relative",
        }}
      >
        <div className={classes.smallIconContainer}>
          {isOwnAccount && isSmallScreen && (
            <IconButton href={editHref} className={classes.editButton}>
              <EditSharpIcon />
            </IconButton>
          )}
          {isOrganization && (
            <SocialMediaShareButton
              containerClassName={classes.shareButtonContainer}
              contentLinkPath={`${getLocalePrefix(locale)}/organizations/${account.url_slug}`}
              apiEndpoint={`/api/organizations/${account.url_slug}/set_shared_organization/`}
              locale={locale}
              token={token}
              messageTitle={`${organizationTexts.climate_protection_organization}${account.name}`}
              tinyScreen={isTinyScreen}
              smallScreen={isSmallScreen}
              mailBody={organizationTexts.share_organization_email_body}
              texts={texts}
              dialogTitle={organizationTexts.tell_others_about_this_organization}
              switchColors={true}
            />
          )}
        </div>
      </div>
      <Container className={classes.infoContainer}>
        <Container className={classes.avatarWithInfo}>
          <div className={classes.avatarContainer}>
            {account.badges?.length > 0 ? (
              <ProfileBadge badge={account.badges[0]}>
                <Avatar {...avatarProps} />
              </ProfileBadge>
            ) : (
              <Avatar {...avatarProps} />
            )}
          </div>
          <Typography variant="h5" className={classes.name}>
            {account.name}
          </Typography>
          {location && (
            <div>
              <div className={classes.content}>
                <Tooltip title="Location">
                  <PlaceIcon color="primary" className={classes.infoIcon} />
                </Tooltip>
                {location ? location + locationAdditionalText : location.missingMessage}
              </div>
            </div>
          )}
          {account.types && (
            <Container className={classes.noPadding}>
              {account.types.map((type) => (
                <Chip label={type.name} key={type.key} className={classes.chip} />
              ))}
            </Container>
          )}

          {account.info.social_options && (
            <div className={classes.marginTop}>
              {getSocialMediaButtons(parseSocials(account.info.social_options)).map(
                (socialMedia, index) => (
                  <SocialMediaButton
                    key={index}
                    href={socialMedia.href}
                    socialMediaIcon={{ icon: socialMedia.icon }}
                    altText={socialMedia.altText}
                    isFooterIcon={socialMedia.isFooterIcon}
                  />
                )
              )}
            </div>
          )}
        </Container>
        <Container className={classes.accountInfo}>{displayAccountInfo(account.info)}</Container>
        {isOwnAccount && !isSmallScreen && (
          <div className={classes.editButtonWrapper}>
            <Button variant="contained" color="primary" href={editHref}>
              <EditSharpIcon className={classes.innerIcon} />
              {editText ? editText : texts.edit_profile}
            </Button>
          </div>
        )}
      </Container>
      <Divider className={classes.marginTop} />
      {detailledDescription?.value && (
        <Container>
          <DetailledDescription
            title={detailledDescription.name}
            value={detailledDescription.value}
            className={classes.detailledDescription}
          />
        </Container>
      )}
      {children}
    </Container>
  );
}

const getFullInfoElement = (infoMetadata, key, value) => {
  return { ...infoMetadata[key], value: value };
};

function parseSocials(socials) {
  const existingSocials = socials.filter(
    (social) =>
      social.social_media_name.toLowerCase().includes("twitter.com".toLocaleLowerCase()) ||
      social.social_media_name.toLowerCase().includes("youtube.com".toLocaleLowerCase()) ||
      social.social_media_name.toLowerCase().includes("linkedin.com".toLocaleLowerCase()) ||
      social.social_media_name.toLowerCase().includes("instagram.com".toLocaleLowerCase()) ||
      social.social_media_name.toLowerCase().includes("facebook.com".toLocaleLowerCase())
  );
  const socialsLinks = existingSocials.map((social) => social.social_media_name);
  return socialsLinks;
}

function getSocialMediaButtons(socialLinks) {
  const socialMediaLinks = [];
  socialLinks.map((social) =>
    social.toLowerCase().includes("twitter".toLocaleLowerCase())
      ? socialMediaLinks.push(addTwitterIconButton(social))
      : "" || social.toLowerCase().includes("youtube.com")
      ? socialMediaLinks.push(addYoutubeIconButton(social))
      : "" || social.toLowerCase().includes("linkedin.com")
      ? socialMediaLinks.push(addLinkedInIconButton(social))
      : "" || social.toLowerCase().includes("instagram.com")
      ? socialMediaLinks.push(addInstagramIconButton(social))
      : "" || social.toLowerCase().includes("facebook.com")
      ? socialMediaLinks.push(addFacebookIconButton(social))
      : ""
  );
 
  return socialMediaLinks;
}

function addTwitterIconButton(link) {
  return {
    href: link,
    icon: TwitterIcon,
    altText: "Twitter",
  };
}

function addLinkedInIconButton(link) {
  return {
    href: link,
    icon: LinkedInIcon,
    altText: "LinkedIn",
  };
}

function addYoutubeIconButton(link) {
  return {
    href: link,
    icon: YouTubeIcon,
    altText: "Youtube",
  };
}
function addFacebookIconButton(link) {
  return {
    href: link,
    icon: FacebookIcon,
    altText: "Facebook",
  };
}
function addInstagramIconButton(link) {
  return {
    href: link,
    icon: InstagramIcon,
    altText: "Instagram",
  };
}
