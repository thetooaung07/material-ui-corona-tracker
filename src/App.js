import React from "react";
import "./App.css";
import HomeNav from "./Components/Home/HomeNav";
import ContentBody from "./Components/Home/ContentBody";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import LiveData from "./Components/LiveData/LiveData";

function App() {
  return (
    <div className="App">
      <Router>
        <HomeNav></HomeNav>
        <Switch>
        <Redirect from="/" to="/home" />
          <Route exact path="/" render={props => <ContentBody {...props}/>}></Route>
          <Route exact path="/:page" render={props => <LiveData {...props}/>}></Route>
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
