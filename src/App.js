import React, {useState} from "react";
import "./App.css";
import HomeNav from "./Components/Home/HomeNav";
import ContentBody from "./Components/Home/ContentBody";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import LiveData from "./Components/DataDisplayV2/LiveData";
import "leaflet/dist/leaflet.css";
import Footer from "./Components/Home/Footer";

function App() {

  const [tabSelect, setTabSelect] = useState(1);

  return (
    <div className="App">
      <Router>
        <div className="vh100">
          <div id="home-nav">
            <HomeNav tabSelect={tabSelect} setTabSelect={setTabSelect}></HomeNav>
          </div>
          <div className="wrapper">
            <Switch>
              <Route
                exact
                path="/home"
                render={(props) => <ContentBody {...props}  setTabSelect={setTabSelect}/>}
              ></Route>
              <Route
                exact
                path="/livedata"
                render={(props) => <LiveData {...props} />}
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
