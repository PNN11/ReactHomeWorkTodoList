import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import LocalesProvider from "./providers/LocalesProvider/LocalesProvider";
import ThemeProvider from "./providers/ThemeProvider/ThemeProvider";
import { store } from "./store";
import AppRouter from "./router/AppRouter";
import Header from "./containers/Header/Header";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider>
          <LocalesProvider>
            <Header />
            <AppRouter />
          </LocalesProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
