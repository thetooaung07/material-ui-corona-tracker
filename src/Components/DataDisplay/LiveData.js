import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LiveStatus from "./LiveStatus";
import { makeStyles } from "@material-ui/core/styles";
import ResultCard from "./ResultCard";
import { fetchData } from "./ApiForData";
import headerImg from "../../img/headerImg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    height: "100%",
  },
  gridRoot: {
    flexGrow: 1,
    maxWidth: "100vw",
    width: "80%",
    margin: "0 auto",
  },
  imgedit: {
    textAlign: "center",
    paddingTop: "40px",
    marginBottom: " 40px",
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

  // console.log(resultData);

  return (
    <div className={classes.root}>
      <div className={classes.imgedit}>
        <img src={headerImg} alt="COVID-19" />
      </div>

      <Grid container className={classes.gridRoot} spacing={3} justify="center">
        <Grid container item xs={12} sm={12} md={3}>
          <Grid item xs={12}>
            <LiveStatus setResultData={setResultData}></LiveStatus>
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={12} md={9} spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            {resultData && (
              <ResultCard
                data={resultData.confirmed}
                lastUpdate={resultData.lastUpdate}
                case="CONFIRMED"
                cardColor={{
                  bgColor: "rgb(255,245,245)",
                  headerColor: "rgb(254,215,215)",
                }}
              ></ResultCard>
            )}
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            {resultData && (
              <ResultCard
                data={resultData.recovered}
                lastUpdate={resultData.lastUpdate}
                case="RECOVERY"
                cardColor={{
                  bgColor: "rgb(240,255,244)",
                  headerColor: "rgb(198,246,213)",
                }}
              ></ResultCard>
            )}
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            {resultData && (
              <ResultCard
                data={resultData.deaths}
                lastUpdate={resultData.lastUpdate}
                case="DEATHS"
                cardColor={{
                  bgColor: "rgba(237, 242, 247, 0.626)",
                  headerColor: "rgb(226,232,240)",
                }}
              ></ResultCard>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LiveData;
