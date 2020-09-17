import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LiveStatus from "./LiveStatus";
import {makeStyles} from '@material-ui/core/styles'
import ResultCard from "./ResultCard";
import {fetchData} from './ApiForData'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100vw",
  },
}));



const LiveData = () => {

  const classes = useStyles();
  const [resultData, setResultData] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      setResultData(await fetchData());
    };

    fetchApi();
  }, []);
  console.log(resultData);

  return (
    <div>

    <Grid container className={classes.root} spacing={3} justify="center" alignItems="center">
    
      <Grid item >
        <LiveStatus></LiveStatus>
      </Grid>
      <Grid item>
      {resultData &&  <ResultCard data={resultData.confirmed} case="CONFIRMED"></ResultCard>}
      </Grid>
      <Grid item>
      {resultData &&  <ResultCard  data={resultData.recovered} case="RECOVERY"></ResultCard>}
      </Grid>
      <Grid item>
      {resultData &&  <ResultCard  data={resultData.deaths} case="DEATHS"></ResultCard>}
      </Grid>
     
    </Grid>

    </div>
    
  );
};

export default LiveData;
