import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  deleteTask,
  deleteTaskPermanently,
  undoTask,
  editTasks,
  favTasks,
} from "../reducers/todo";

export const useTodo = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDeadline, settaskDeadline] = useState("");
  const [taskImage, settaskImage] = useState("");
  const dispatch = useDispatch();
  const [validate, setValidate] = useState({
    title: false,
    description: false,
    date: false,
    titleDuplicate: false,
    image: false,
  });
  const tasks = useSelector((state) => state.todo);

  const changeHandler = (e) => {
    if (e.target.name === "taskTitle") {
      settaskTitle(e.target.value);
    } else if (e.target.name === "taskDesc") {
      settaskDescription(e.target.value);
    } else if (e.target.name === "taskImage") {
      console.log(e.target.files);
      settaskImage(window.URL.createObjectURL(e.target.files[0]));
    } else {
      settaskDeadline(e.target.value);
    }
  };

  const addTodo = () => {
    if (
      taskTitle === "" ||
      taskDescription === "" ||
      taskDeadline === "" ||
      taskImage === ""
    ) {
      setValidate({
        title: taskTitle === "",
        description: taskDescription === "",
        date: taskDeadline === "",
        image: taskImage === "",
      });
    } else if (taskTitle !== "" && !isNotDuplicate()) {
      setValidate({
        title: false,
        description: false,
        date: false,
        image: false,
        titleDuplicate: true,
      });
    } else {
      dispatch(
        addTask({
          taskName: taskTitle,
          taskDescription: taskDescription,
          taskDeadline: taskDeadline,
          taskImage: taskImage,
          favorite: false,
          taskCompleted: false,
        })
      );
      setValidate({
        title: false,
        description: false,
        date: false,
        image: false,
        titleDuplicate: false,
      });
      settaskTitle("");
      settaskDescription("");
      settaskDeadline("");
      settaskImage("");
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const isNotDuplicate = () => {
    if (tasks.tasks.find((task) => task.taskName === taskTitle)) return false;
    else return true;
  };

  const closeTodo = (task, ind) => {
    dispatch(
      deleteTask({
        task: {
          ...task,
          favorite: false,
          taskCompleted: true,
        },
        index: ind,
      })
    );
  };

  const editTask = (task, ind) => {
    settaskTitle(task.taskName);
    settaskDescription(task.taskDescription);
    settaskDeadline(task.taskDeadline);
    settaskImage(task.taskImage);
    dispatch(
      editTasks({
        index: ind,
      })
    );
  };

  const undoTodo = (task, ind) => {
    dispatch(
      undoTask({
        task: {
          ...task,
          taskCompleted: false,
        },
        index: ind,
      })
    );
  };

  const deleteTodo = (task, ind) => {
    dispatch(
      deleteTaskPermanently({
        index: ind,
      })
    );
  };

  const favPress = (task, ind) => {
    dispatch(
      favTasks({
        task: {
          ...task,
          favorite: !task.favorite,
          taskCompleted: false,
        },
        index: ind,
      })
    );
  };

  return {
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
    favPress,
  };
};
