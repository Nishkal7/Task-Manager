import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./todo/todo";
import { Provider } from "react-redux";
import store from "./store";
import TodoDetails from "./todo/todoDetails";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route index element={<Todo />} />
            <Route path="details" element={<TodoDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
