import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AboutCard from "./AboutCard";

const useStyle = makeStyles((theme) => ({
  rootContainer: {
    width: "70%",
    margin: "0 auto",
  },
}));

const About = () => {
  const classes = useStyle();

  return (
    <div className={` About wrapper-sub`}>
      <div className={classes.rootContainer}>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <AboutCard />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <AboutCard></AboutCard>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <AboutCard></AboutCard>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <AboutCard></AboutCard>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
