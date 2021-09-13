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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  menuButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  appbar: {
    backgroundColor: "rgba(158,158,158,0.5)",
  },
  tabWidth: {
    minWidth: "125px",
    maxWidth: " 125px ",
    [theme.breakpoints.down("sm")]: {
      minWidth: "25%",
      maxWidth: " 100% ",
    },
  },
  tabRes: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

const HomeNav = ({tabSelect, setTabSelect}) => {
  const tabNametoIndex = {
    1: "home",
    2: "livedata",
  };
 

 
  const history = useHistory();
  const locationName = history.location.pathname.split("/")[1] || 'home';
  const classes = useStyle();


  const handleChange = (event, newValue) => {
    setTabSelect(newValue);
    history.push(`/${tabNametoIndex[newValue]}`);
  };
  useEffect(() => {
    
    if (locationName === "home") {
      setTabSelect(1);
    } else if (locationName === "livedata") {
      setTabSelect(2);
    }
  }, [locationName, history.location.pathname, setTabSelect]);



  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.tabRes}>
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

          <Tabs
            value={tabSelect}
            onChange={handleChange}
            className={classes.tabRes}
          >
            <Tab className={classes.tabWidth} value={1} label="Home" />
            <Tab className={classes.tabWidth} value={2} label="Live Data" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HomeNav;
