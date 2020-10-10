// Libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";

// Components
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Projects from "./components/projects/Projects";

function isLoggedIn() {
  if (Cookies.get("logged_user")) return true;
  else return false;
}

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Main isLoggedIn={isLoggedIn} />
      </Route>

      <Route exact path="/login">
        <Login isLoggedIn={isLoggedIn} />
      </Route>

      <Route exact path="/dashboard">
        <Dashboard isLoggedIn={isLoggedIn} />
      </Route>

      <Route exact path="/projects">
        <Projects isLoggedIn={isLoggedIn} />
      </Route>
    </Switch>
  );
}

export default App;
