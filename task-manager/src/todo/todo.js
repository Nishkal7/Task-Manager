/* eslint-disable no-undef */
import React from "react";
import { useTodo } from "./useTodo";
import useStyles from "./styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CreateTodo from "./createTodo";
import TaskList from "./taskList";

const Todo = () => {
  const {
    taskTitle,
    taskDescription,
    taskDeadline,
    editTask,
    changeHandler,
    tasks,
    addTodo,
    deleteTodo,
    closeTodo,
    undoTodo,
    validate,
    favPress
  } = useTodo();
  // const classes = useStyles();
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative" style={useStyles.appBar}>
        <Toolbar align="center">
          <ListAltOutlinedIcon sx={{ mr: 2 }} />
          <Typography align="center" variant="h5" color="inherit" noWrap>
            Task Management
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <CreateTodo
          validate={validate}
          taskTitle={taskTitle}
          taskDescription={taskDescription}
          taskDeadline={taskDeadline}
          changeHandler={changeHandler}
        />
      </div>
      <Box textAlign="center">
        <Button
          onClick={addTodo}
          style={useStyles.todoCreateTask}
          variant="contained"
        >
          Create Task
        </Button>
      </Box>
      <div style={useStyles.cardsLayoutView}>
        <Grid container spacing={3} padding={2}>
          <TaskList create={true} tasks = {tasks.tasks} buttonOne={editTask} buttonTwo = {closeTodo} favPress = {favPress}/>
        </Grid>
        {tasks.closedTasks.length > 0 && (
          <>
            <div style={useStyles.vl}></div>
            <Grid container spacing={3} padding={2}>
            <TaskList create={false} tasks = {tasks.closedTasks} buttonOne={undoTodo} buttonTwo = {deleteTodo}/>
            </Grid>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Todo;
