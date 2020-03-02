import React from "react";
import NavBar from "./components/navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import CheckList from "./components/checkList";
import NewForm from "./components/form";
import Records from "./components/records";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div class="content">
        <Switch>
          <Route path="/check-list" component={CheckList}></Route>
          <Route path="/new-form" component={NewForm}></Route>
          <Route path="/records" component={Records}></Route>
          <Route path="/" exact component={CheckList}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
