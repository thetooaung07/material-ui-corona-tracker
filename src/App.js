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
import LiveData from "./Components/DataDisplay/LiveData";
import About from "./Components/About/About";
import ContactUs from "./Components/Contact/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <HomeNav></HomeNav>
        </div>
        <div style={{height: "100%"}}>
          <Switch>
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
            <Redirect from="/" to="/home"></Redirect>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
