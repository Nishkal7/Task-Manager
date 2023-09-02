import React from "react";
import CreateTodo from "../createTodo";
import renderer from "react-test-renderer";

describe("<CreateTodo />", () => {
  it("renders CreateTodo component", () => {
    const validate = {
        "title": true,
        "description": true,
        "date": true,
        "image": true
    }
    const tree = renderer
      .create(
          <CreateTodo validate={validate}/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
