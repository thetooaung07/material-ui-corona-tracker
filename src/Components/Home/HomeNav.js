import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PublicRoundedIcon from "@material-ui/icons/PublicRounded";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "rgba(158,158,158,0.5)",
  },
  tabWidth: {
    minWidth: "125px",
    maxWidth: " 125px ",
  },
}));

const HomeNav = () => {
  const tabNametoIndex = {
    1: "home",
    2: "livedata",
    3: "about",
    4: "contact",
  };
  const IndextoTabName = {
    home: 1,
    livedata: 2,
    about: 3,
    contact: 4,
  };
  const location = window.location.href;
  const locationName = location.split("/")[3];
  // console.log(locationName);

  const history = useHistory();
  const classes = useStyle();
  const [tabSelect, setTabSelect] = React.useState(
    IndextoTabName[locationName]
  );
  // console.log(window.location.href);
  // console.log(tabSelect);

  useEffect(() => {}, [tabSelect]);
  const handleChange = (event, newValue) => {
    history.push(`/${tabNametoIndex[newValue]}`);
    setTabSelect(newValue);
  };
  // console.log(tabSelect);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <div className={classes.title}>
            <Button
              className={classes.menuButton}
              color="inherit"
              variant="text"
              disableRipple
              startIcon={<PublicRoundedIcon />}
            >
              <Typography variant="h6" className={classes.title}>
                &nbsp; Covid-Tracker
              </Typography>
            </Button>
          </div>
          <Tabs value={tabSelect} onChange={handleChange}>
            <Tab className={classes.tabWidth} value={1} label="Home" />
            <Tab className={classes.tabWidth} value={2} label="Live Data" />
            <Tab className={classes.tabWidth} value={3} label="About" />
            <Tab
              className={classes.tabWidth}
              label="Contact"
              value={4}
              style={{ marginRight: "30px" }}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HomeNav;
