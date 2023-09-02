import reducer, {
  addTask,
  deleteTask,
  deleteTaskPermanently,
  undoTask,
  editTasks,
  favTasks,
} from "./todo";

const initialState = {
  tasks: [],
  closedTasks: [],
};

const mockState = {
  tasks: [
    {
      taskName: "Task Four",
      taskDescription: "Description for Task Four",
      taskDeadline: "2023-09-06",
      taskImage:
        "blob:http://localhost:3000/e088bcb4-e2b0-4f10-955c-e443a79a3362",
      favorite: false,
      taskCompleted: false,
    },
    {
      taskName: "Task Two",
      taskDescription: "Description for Task Two",
      taskDeadline: "2023-09-13",
      taskImage:
        "blob:http://localhost:3000/509825db-54c1-4900-9b23-958689114976",
      favorite: true,
      taskCompleted: false,
    },
  ],
  closedTasks: [
    {
      taskName: "Task Three",
      taskDescription: "Description for Task Three",
      taskDeadline: "2023-09-05",
      taskImage:
        "blob:http://localhost:3000/07af165e-32f5-4e39-89e1-4ddd1b286bb9",
      favorite: false,
      taskCompleted: true,
    },
  ],
};

test("should return result fot addTask", () => {
  expect(
    reducer(
      initialState,
      addTask({
        taskName: "Task Four",
        taskDescription: "Description for Task Four",
        taskDeadline: "2023-09-06",
        taskImage:
          "blob:http://localhost:3000/e088bcb4-e2b0-4f10-955c-e443a79a3362",
        favorite: false,
        taskCompleted: false,
      })
    )
  ).toEqual({
    tasks: [
      {
        taskName: "Task Four",
        taskDescription: "Description for Task Four",
        taskDeadline: "2023-09-06",
        taskImage:
          "blob:http://localhost:3000/e088bcb4-e2b0-4f10-955c-e443a79a3362",
        favorite: false,
        taskCompleted: false,
      },
    ],
    closedTasks: [],
  });
});

test("should return result for deleteTask", () => {
  expect(
    reducer(
      mockState,
      deleteTask({
        task: {
          taskName: "Task Four",
          taskDescription: "Description for Task Four",
          taskDeadline: "2023-09-06",
          taskImage:
            "blob:http://localhost:3000/e088bcb4-e2b0-4f10-955c-e443a79a3362",
          favorite: false,
          taskCompleted: true,
        },
        index: 0,
      })
    )
  ).toEqual({
    tasks: [
      {
        taskName: "Task Two",
        taskDescription: "Description for Task Two",
        taskDeadline: "2023-09-13",
        taskImage:
          "blob:http://localhost:3000/509825db-54c1-4900-9b23-958689114976",
        favorite: true,
        taskCompleted: false,
      },
    ],
    closedTasks: [
      {
        taskName: "Task Four",
        taskDescription: "Description for Task Four",
        taskDeadline: "2023-09-06",
        taskImage:
          "blob:http://localhost:3000/e088bcb4-e2b0-4f10-955c-e443a79a3362",
        favorite: false,
        taskCompleted: true,
      },
      {
        taskName: "Task Three",
        taskDescription: "Description for Task Three",
        taskDeadline: "2023-09-05",
        taskImage:
          "blob:http://localhost:3000/07af165e-32f5-4e39-89e1-4ddd1b286bb9",
        favorite: false,
        taskCompleted: true,
      },
    ],
  });
});

test("should return result for deletePermTask", () => {
  expect(
    reducer(
      mockState,
      deleteTaskPermanently({
        task: {
          taskName: "Task Three",
          taskDescription: "Description for Task Three",
          taskDeadline: "2023-09-05",
          taskImage:
            "blob:http://localhost:3000/07af165e-32f5-4e39-89e1-4ddd1b286bb9",
          favorite: false,
          taskCompleted: false,
        },
        index: 0,
      })
    )
  ).toEqual({
    tasks: [
      {
        taskName: "Task Four",
        taskDescription: "Description for Task Four",
        taskDeadline: "2023-09-06",
        taskImage:
          "blob:http://localhost:3000/e088bcb4-e2b0-4f10-955c-e443a79a3362",
        favorite: false,
        taskCompleted: false,
      },
      {
        taskName: "Task Two",
        taskDescription: "Description for Task Two",
        taskDeadline: "2023-09-13",
        taskImage:
          "blob:http://localhost:3000/509825db-54c1-4900-9b23-958689114976",
        favorite: true,
        taskCompleted: false,
      },
    ],
    closedTasks: [],
  });
});

test("should return result for undoTask", () => {
  expect(
    reducer(
      mockState,
      undoTask({
        task: {
          taskName: "Task Three",
          taskDescription: "Description for Task Three",
          taskDeadline: "2023-09-05",
          taskImage:
            "blob:http://localhost:3000/07af165e-32f5-4e39-89e1-4ddd1b286bb9",
          favorite: false,
          taskCompleted: true,
        },
        index: 0,
      })
    )
  ).toEqual({
    tasks: [
      {
        taskName: "Task Four",
        taskDescription: "Description for Task Four",
        taskDeadline: "2023-09-06",
        taskImage:
          "blob:http://localhost:3000/e088bcb4-e2b0-4f10-955c-e443a79a3362",
        favorite: false,
        taskCompleted: false,
      },
      {
        taskName: "Task Two",
        taskDescription: "Description for Task Two",
        taskDeadline: "2023-09-13",
        taskImage:
          "blob:http://localhost:3000/509825db-54c1-4900-9b23-958689114976",
        favorite: true,
        taskCompleted: false,
      },
      {
        taskName: "Task Three",
        taskDescription: "Description for Task Three",
        taskDeadline: "2023-09-05",
        taskImage:
          "blob:http://localhost:3000/07af165e-32f5-4e39-89e1-4ddd1b286bb9",
        favorite: false,
        taskCompleted: true,
      },
    ],
    closedTasks: [],
  });
});

test("should return result for editTask", () => {
  expect(
    reducer(
      mockState,
      editTasks({
        index: 0,
      })
    )
  ).toEqual({
    tasks: [
      {
        taskName: "Task Two",
        taskDescription: "Description for Task Two",
        taskDeadline: "2023-09-13",
        taskImage:
          "blob:http://localhost:3000/509825db-54c1-4900-9b23-958689114976",
        favorite: true,
        taskCompleted: false,
      },
    ],
    closedTasks: [
      {
        taskName: "Task Three",
        taskDescription: "Description for Task Three",
        taskDeadline: "2023-09-05",
        taskImage:
          "blob:http://localhost:3000/07af165e-32f5-4e39-89e1-4ddd1b286bb9",
        favorite: false,
        taskCompleted: true,
      },
    ],
  });
});

test("should return result for favTask", () => {
  expect(
    reducer(
      mockState,
      favTasks({
        task: {
          taskName: "Task Two",
          taskDescription: "Description for Task Two",
          taskDeadline: "2023-09-13",
          taskImage:
            "blob:http://localhost:3000/509825db-54c1-4900-9b23-958689114976",
          favorite: true,
          taskCompleted: false,
        },
        index: 1,
      })
    )
  ).toEqual({
    tasks: [
      {
        taskName: "Task Two",
        taskDescription: "Description for Task Two",
        taskDeadline: "2023-09-13",
        taskImage:
          "blob:http://localhost:3000/509825db-54c1-4900-9b23-958689114976",
        favorite: true,
        taskCompleted: false,
      },
      {
        taskName: "Task Four",
        taskDescription: "Description for Task Four",
        taskDeadline: "2023-09-06",
        taskImage:
          "blob:http://localhost:3000/e088bcb4-e2b0-4f10-955c-e443a79a3362",
        favorite: false,
        taskCompleted: false,
      },
    ],
    closedTasks: [
      {
        taskName: "Task Three",
        taskDescription: "Description for Task Three",
        taskDeadline: "2023-09-05",
        taskImage:
          "blob:http://localhost:3000/07af165e-32f5-4e39-89e1-4ddd1b286bb9",
        favorite: false,
        taskCompleted: true,
      },
    ],
  });
});
