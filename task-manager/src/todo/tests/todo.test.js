import React from "react";
import Todo from "../todo";
import { Provider } from "react-redux";
import store from "../../store";
import renderer from "react-test-renderer";

describe("<todo />", () => {
  it("renders todo Component", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Todo />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
