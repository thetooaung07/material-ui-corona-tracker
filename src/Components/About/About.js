import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AboutCard from "./AboutCard";

const useStyle = makeStyles((theme) => ({
  rootContainer: {},
}));

const About = () => {
  const classes = useStyle();

  return (
    <div className={`About wrapper-sub ${classes.rootContainer}`}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <AboutCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AboutCard></AboutCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AboutCard></AboutCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AboutCard></AboutCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
