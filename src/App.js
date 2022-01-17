import React from "react";
import { Provider } from "react-redux";
import TodoListContainer from "./containers/TodoListContainer/TodoListContainer";
import LocalesProvider from "./providers/LocalesProvider/LocalesProvider";
import ThemeProvider from "./providers/ThemeProvider/ThemeProvider";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <LocalesProvider>
          <TodoListContainer />
        </LocalesProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
