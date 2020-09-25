import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";

const useStyle = makeStyles({
  footerStyle: {
    height: 56,
    backgroundColor: " rgba(158,158,158,0.5)",
    color: "white",
    textAlign: "center",
  },
});

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footerStyle}>Helllo HI HOw are you I am Footer</div>
  );
};

export default Footer;