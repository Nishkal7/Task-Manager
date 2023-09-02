import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: JSON.parse(localStorage.getItem("tasks")) ?? {
    tasks: [],
    closedTasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload.index, 1);
      state.closedTasks.unshift(action.payload.task);
    },
    deleteTaskPermanently: (state, action) => {
      state.closedTasks.splice(action.payload.index, 1);
    },
    undoTask: (state, action) => {
      state.tasks.push(action.payload.task);
      state.closedTasks.splice(action.payload.index, 1);
    },
    editTasks: (state, action) => {
      state.tasks.splice(action.payload.index, 1);
    },
    favTasks: (state, action) => {
      if(action.payload.task.favorite){
        state.tasks.splice(action.payload.index, 1);
        state.tasks.unshift(action.payload.task)
      }
      else{
        state.tasks.splice(action.payload.index, 1);
        state.tasks.push(action.payload.task)
      }
    }
  },
});

export default todoSlice.reducer;
export const {
  addTask,
  deleteTask,
  toggleTask,
  deleteTaskPermanently,
  clearHistory,
  counterForTask,
  undoTask,
  editTasks,
  favTasks
} = todoSlice.actions;
