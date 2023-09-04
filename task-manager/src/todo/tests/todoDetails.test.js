import React from "react";
import TodoDetails from "../todoDetails";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

describe("<TodoDetails />", () => {
  it("renders TodoDetails component", () => {
    const task = {
      taskName: "Task Four",
      taskDescription: "Description for Task Four",
      taskDeadline: "2023-09-06",
      taskImage:
        "blob:http://localhost:3000/e088bcb4-e2b0-4f10-955c-e443a79a3362",
      favorite: true,
      taskCompleted: false,
    };

    const tree = renderer
      .create(
        <MemoryRouter initialEntries={[{ pathname: '/details',  state: task }]}>
          <TodoDetails />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

