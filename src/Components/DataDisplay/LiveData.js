import { Box, Grid } from "@material-ui/core";
import React from "react";
import LiveStatus from "./LiveStatus";
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100vw",
  },
}));
const LiveData = () => {
  const classes = useStyles();

  return (
    <div>

    
    <Grid container className={classes.root} spacing={3} justify="center" alignItems="center">
    
      <Grid item >
        <LiveStatus></LiveStatus>
      </Grid>
      <Grid item>
        <LiveStatus></LiveStatus>
      </Grid>
      <Grid item>
        <LiveStatus></LiveStatus>
      </Grid>
      <Grid item>
        <LiveStatus></LiveStatus>
      </Grid>
     
    </Grid>

    </div>
    
  );
};

export default LiveData;
