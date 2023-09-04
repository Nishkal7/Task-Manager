import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "../todo";
import { Provider } from "react-redux";
import store from "../../store";
import renderer from "react-test-renderer";

describe("<todo />", () => {
  it("renders todo Component", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Todo />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
