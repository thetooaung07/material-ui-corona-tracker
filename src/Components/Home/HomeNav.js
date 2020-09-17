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

const HomeNav = (props) => {

  const classes = useStyle();
  const [tabSelect, setTabSelect] = React.useState(0);

 

  const handleChange = (event, newValue) => {

    setTabSelect(newValue);
  };
  console.log(tabSelect);
  return (
    <div className={classes.root}>
    
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
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
          <div className={classes.title}></div>
          <Tabs value={tabSelect} onChange={handleChange}>
            <Tab className={classes.tabWidth} label="Home" />
            <Tab className={classes.tabWidth} label="Live Data" />
            <Tab className={classes.tabWidth} label="About" />
            <Tab
              className={classes.tabWidth}
              label="Contact"
              style={{ marginRight: "30px" }}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HomeNav;
