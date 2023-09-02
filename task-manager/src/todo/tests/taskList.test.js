import React from "react";
import TaskList from "../taskList";
import renderer from "react-test-renderer";

describe("<taskList />", () => {
  it("renders taskList component for Created Items flow", () => {
    const tasks = [
        {
            "taskName": "Task Four",
            "taskDescription": "Description for Task Four",
            "taskDeadline": "2023-09-06",
            "taskImage": "blob:http://localhost:3000/e088bcb4-e2b0-4f10-955c-e443a79a3362",
            "favorite": true,
            "taskCompleted": false
        },
        {
            "taskName": "Task Three",
            "taskDescription": "Description for Task Three",
            "taskDeadline": "2023-09-05",
            "taskImage": "blob:http://localhost:3000/07af165e-32f5-4e39-89e1-4ddd1b286bb9",
            "favorite": false,
            "taskCompleted": false
        }
    ]
    const tree = renderer
      .create(
          <TaskList create={true} tasks={tasks}/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders taskList component for Deleted Items flow", () => {
    const tasks =[
        {
            "taskName": "Task Four",
            "taskDescription": "Description for Task Four",
            "taskDeadline": "2023-09-06",
            "taskImage": "blob:http://localhost:3000/e088bcb4-e2b0-4f10-955c-e443a79a3362",
            "favorite": false,
            "taskCompleted": true
        },
        {
            "taskName": "Task Three",
            "taskDescription": "Description for Task Three",
            "taskDeadline": "2023-09-05",
            "taskImage": "blob:http://localhost:3000/07af165e-32f5-4e39-89e1-4ddd1b286bb9",
            "favorite": false,
            "taskCompleted": true
        }
    ]
    const tree = renderer
      .create(
          <TaskList create={false} tasks={tasks}/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
