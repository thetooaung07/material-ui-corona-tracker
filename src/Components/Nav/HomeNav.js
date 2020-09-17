import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
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
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
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
  const classes = useStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          <Tabs value={value} onChange={handleChange} >
            <Tab className={classes.tabWidth} label="Home" />
            <Tab className={classes.tabWidth} label="Live Data" />
            <Tab className={classes.tabWidth} label="About" />
            <Tab
              className={classes.tabWidth}
              style={{ marginRight: "30px" }}
              label="Contact"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HomeNav;
