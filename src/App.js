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

import About from "./Components/About/About";
import ContactUs from "./Components/Contact/ContactUs";
import LiveData from "./Components/DataDisplayV2/LiveData";
import "leaflet/dist/leaflet.css";
import Footer from "./Components/Home/Footer";

function App() {
  const setHeight = () => {
    const body = document.documentElement.clientHeight;
    const heightOfnav = document.getElementById("home-nav").clientHeight;

    // const wrapper = document.getElementById("wrapper");
    // wrapper.style.maxHeight = body - nav1 - 5 + "px";
    // wrapper.style.minHeight = body - nav1 - 5 + "px";
  };

  return (
    <div className="App">
      <Router>
        <div className="vh100">
          <div id="home-nav">
            <HomeNav></HomeNav>
          </div>
          <div className="wrapper">
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
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
