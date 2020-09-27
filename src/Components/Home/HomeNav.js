import React from "react";
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
  const history = useHistory();
  const classes = useStyle();
  const [tabSelect, setTabSelect] = React.useState(
    IndextoTabName[locationName]
  );



  const handleChange = (event, newValue) => {
    history.push(`/${tabNametoIndex[newValue]}`);
    setTabSelect(newValue);
  };
  // console.log(tabSelect);

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
            value={tabSelect ? tabSelect : 1}
            onChange={handleChange}
            className={classes.tabRes}
          >
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
