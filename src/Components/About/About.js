import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AboutCard from "./AboutCard";

const useStyle = makeStyles((theme) => ({
  typo: {
    color: "white",
  },
  gridContainer: {
    width: "60%",
    margin: "0 auto",
    marginTop: 50,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center"
  },
}));

const About = () => {
  const classes = useStyle();
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="About wrapper-sub">
      <div className={classes.gridContainer}>
        <Grid container justify="center" spacing={3}>
          {arr.map((el) => (
            <Grid item xs={12} sm={6} md={4}>
              <AboutCard></AboutCard>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default About;
