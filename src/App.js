import React from "react";
import "./App.css";
import HomeNav from "./Components/Home/HomeNav";
import ContentBody from "./Components/Home/ContentBody";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LiveData from "./Components/LiveData/LiveData";
import About from "./Components/About/About";
import ContactUs from "./Components/Contact/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <HomeNav></HomeNav>
        <Switch>
        <Redirect from="/" to="/home"></Redirect>
          <Route
            exact
            path="/home"
            render={(props) => <ContentBody {...props} />}
          ></Route>
          <Route
            exact
            path="/livedata"
            render={(props) => <LiveData {...props} />}
          ></Route>
          <Route
            exact
            path="/about"
            render={(props) => <About {...props} />}
          ></Route>
          <Route
            exact
            path="/contact"
            render={(props) => <ContactUs {...props} />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
