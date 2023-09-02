/* eslint-disable no-undef */
import React from "react";
import useStyles from "./styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const CreateTodo = ({validate, taskTitle,taskDescription, taskDeadline, changeHandler}) => {
  return (
    <div>
      <Grid container spacing={3} padding={2}>
        <Grid item xs={12} sm={2} md={2}>
          <TextField
            error={validate.titleDuplicate || validate.title}
            style={useStyles.todoDescriptionView}
            id="taskTitle"
            name="taskTitle"
            type="text"
            value={taskTitle}
            helperText={
              validate.titleDuplicate && taskTitle !== "" && "Duplicate Name"
            }
            placeholder="Task Title"
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            error={validate.description}
            style={useStyles.todoDescriptionView}
            id="taskDesc"
            name="taskDesc"
            type="text"
            value={taskDescription}
            placeholder="Task Description"
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
          <TextField
            error={validate.date}
            style={useStyles.todoDescriptionView}
            id="taskDate"
            name="taskDate"
            type="date"
            value={taskDeadline}
            placeholder="Date"
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
          <TextField
            error={validate.image}
            style={useStyles.todoDescriptionView}
            id="taskImage"
            name="taskImage"
            type="file"
            onChange={changeHandler}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateTodo;
