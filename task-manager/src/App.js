import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./todo/todo";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route index element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
