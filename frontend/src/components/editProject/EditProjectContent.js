import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectField from "../general/SelectField";
import DatePicker from "../general/DatePicker";
import { Switch, Typography, TextField, List, Chip, Button } from "@material-ui/core";
import MiniProfilePreview from "../profile/MiniProfilePreview";
import ProjectDescriptionHelp from "../project/ProjectDescriptionHelp";
import collaborationTexts from "../../../public/data/collaborationTexts";
import MultiLevelSelectDialog from "../dialogs/MultiLevelSelectDialog";
import EnterTextDialog from "../dialogs/EnterTextDialog";

const useStyles = makeStyles(theme => ({
  select: {
    maxWidth: 250
  },
  startDate: {
    marginRight: theme.spacing(4)
  },
  creator: {
    display: "inline-block",
    marginLeft: theme.spacing(2)
  },
  inlineBlock: {
    marginBottom: theme.spacing(2),
    display: "inline-block"
  },
  block: {
    marginBottom: theme.spacing(2)
  },
  subHeader: {
    fontWeight: "bold"
  },
  skill: {
    display: "flex",
    border: "1px solid black",
    height: theme.spacing(5),
    minWidth: 220,
    maxWidth: "100%",
    marginRight: theme.spacing(1),
    background: "none",
    borderRadius: 0,
    fontSize: 16
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(2)
  }
}));

export default function EditProjectContent({
  project,
  handleSetProject,
  statusOptions,
  userOrganizations,
  skillsOptions
}) {
  const classes = useStyles();
  const [selectedItems, setSelectedItems] = React.useState(
    project.skills ? [...project.skills] : []
  );
  const [open, setOpen] = React.useState({ skills: false, connections: false });
  const statusesWithStartDate = statusOptions.filter(s => s.has_start_date).map(s => s.id);
  const statusesWithEndDate = statusOptions.filter(s => s.has_end_date).map(s => s.id);

  const handleChangeProject = (newValue, key) => {
    handleSetProject({ ...project, [key]: newValue });
  };

  const onClickSkillsDialogOpen = () => {
    setOpen({ ...open, skills: true });
  };

  const handleSkillDelete = skill => {
    handleSetProject({
      ...project,
      skills: project.skills.filter(s => s.id !== skill.id)
    });
    setSelectedItems(project.skills.filter(s => s.id !== skill.id));
  };

  const handleSkillsDialogClose = skills => {
    if (skills) handleSetProject({ ...project, skills: skills });
    setOpen({ ...open, skills: false });
  };

  const onClickConnectionsDialogOpen = () => {
    setOpen({ ...open, connections: true });
  };

  const handleConnectionDelete = connection => {
    handleSetProject({
      ...project,
      helpful_connections: project.helpful_connections.filter(c => c != connection)
    });
  };

  const handleConnectionsDialogClose = connection => {
    if (project.helpful_connections && project.helpful_connections.includes(connection))
      alert("You can not add the same connection twice.");
    else {
      if (connection)
        handleSetProject({
          ...project,
          helpful_connections: [...project.helpful_connections, connection]
        });
      setOpen({ ...open, connections: false });
    }
  };

  return (
    <div>
      <div className={classes.block}>
        <div className={classes.block}>
          <Typography component="span">Personal Project</Typography>
          <Switch
            checked={!project.is_personal_project}
            onChange={event => handleChangeProject(!event.target.checked, "is_personal_project")}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
            color="primary"
          />
          <Typography component="span">{"Organization's project"}</Typography>
        </div>
        <div className={classes.block}>
          {project.is_personal_project ? (
            <>
              Created by
              <MiniProfilePreview
                className={classes.creator}
                profile={project.project_parents.parent_user}
                size="small"
              />
            </>
          ) : (
            <SelectField
              controlled
              controlledValue={project.project_parents.parent_organization}
              onChange={event =>
                handleChangeProject(
                  {
                    ...project.project_parents,
                    parent_organization: userOrganizations.find(o => o.name === event.target.value)
                  },
                  "project_parents"
                )
              }
              options={userOrganizations}
              label="Created by"
              className={classes.select}
              required
            />
          )}
        </div>
        <div className={classes.block}>
          <SelectField
            controlled
            controlledValue={project.status}
            onChange={event =>
              handleChangeProject(
                statusOptions.find(s => s.name === event.target.value),
                "status"
              )
            }
            options={statusOptions}
            label="Project status"
            className={classes.select}
            required
          />
        </div>
        <div className={classes.block}>
          {statusesWithStartDate.includes(project.status.id) && (
            <DatePicker
              className={classes.startDate}
              label="Start date"
              date={project.start_date}
              handleChange={newDate => handleChangeProject(newDate, "start_date")}
              required
            />
          )}
          {statusesWithEndDate.includes(project.status.id) && (
            <DatePicker
              className={classes.datePicker}
              label="End date"
              date={project.start_date}
              handleChange={newDate => handleChangeProject(newDate, "end_date")}
              required
              minDate={project.start_date && new Date(project.start_date)}
            />
          )}
        </div>
        <div className={classes.block}>
          <ProjectDescriptionHelp status={project.status} />
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={9}
            label="Project description"
            onChange={event =>
              handleChangeProject(event.target.value.substring(0, 4000), "description")
            }
            helperText={"Describe your project in detail. Please only use English!"}
            placeholder={`Describe your project in more detail.\n\n-What are you trying to achieve?\n-How are you trying to achieve it\n-What were the biggest challenges?\n-What insights have you gained during the implementation?`}
            value={project.description}
          />
        </div>
        <div className={classes.block}>
          <Typography component="h2" variant="h6" color="primary" className={classes.subHeader}>
            {collaborationTexts.allow[project.status.name]}
          </Typography>
          <Switch
            checked={project.collaborators_welcome}
            onChange={event => handleChangeProject(event.target.checked, "collaborators_welcome")}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
            color="primary"
          />
        </div>
        {project.collaborators_welcome && (
          <>
            <div className={classes.block}>
              <Typography
                component="h2"
                variant="subtitle2"
                color="primary"
                className={classes.subHeader}
              >
                {collaborationTexts.skills[project.status.name]}
              </Typography>
              <div>
                {project.skills && (
                  <List className={classes.flexContainer}>
                    {project.skills.map(skill => (
                      <Chip
                        key={skill.id}
                        label={skill.name}
                        className={classes.skill}
                        onDelete={() => handleSkillDelete(skill)}
                      />
                    ))}
                  </List>
                )}
                <Button variant="contained" color="primary" onClick={onClickSkillsDialogOpen}>
                  {project.skills && project.skills.length ? "Edit skills" : "Add Skills"}
                </Button>
              </div>
            </div>
            <div className={classes.block}>
              <Typography
                component="h2"
                variant="subtitle2"
                color="primary"
                className={classes.subHeader}
              >
                {collaborationTexts.connections[project.status.name]}
              </Typography>
              {project.helpful_connections && (
                <List className={classes.flexContainer}>
                  {project.helpful_connections.map(connection => (
                    <Chip
                      key={connection}
                      label={connection}
                      className={classes.skill}
                      onDelete={() => handleConnectionDelete(connection)}
                    />
                  ))}
                </List>
              )}
              <Button variant="contained" color="primary" onClick={onClickConnectionsDialogOpen}>
                Add Connections
              </Button>
            </div>
          </>
        )}
      </div>
      <MultiLevelSelectDialog
        open={open.skills}
        onClose={handleSkillsDialogClose}
        type="skills"
        itemsToChooseFrom={skillsOptions}
        items={project.skills}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <EnterTextDialog
        open={open.connections}
        onClose={handleConnectionsDialogClose}
        maxLength={25}
        applyText="Add"
        inputLabel="Connection"
        title="Add a helpful connection"
      />
    </div>
  );
}