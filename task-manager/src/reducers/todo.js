import { createSlice } from "@reduxjs/toolkit";

const sortData = (data) => {
  //  Sort logic to sort data by date
  //  data.tasks.sort((a, b) => {
  //   let ad = new Date(a.taskDeadline)
  //   let bd = new Date(b.taskDeadline)
  //   return ad - bd;
  //  })
  return data;
}

const todoSlice = createSlice({
  name: "todo",
  initialState: sortData(JSON.parse(localStorage.getItem("tasks"))) ?? {
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
