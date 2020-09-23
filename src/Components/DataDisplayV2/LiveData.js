import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import LiveStatus from "./LiveStatus";
import { makeStyles } from "@material-ui/core/styles";
import ResultCard from "./ResultCard";
import headerImg from "../../img/headerImg.png";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    height: "100%",
    width: "100vw",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      //to change
      // backgroundColor: "red",
      flexDirection: "column",
      marginLeft: 0,
    },
  },
  imgedit: {
    marginTop: 30,
    marginBottom: 40,
    textAlign: "center",
  },
  imgChild: {
    maxWidth: "100%",
    height: "auto",
  },

  inLeftContent: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "red",
    flexWrap: "wrap",
  },
  leftSide: {
    flex: 1,
    backgroundColor: "yellow",
  },
  rightSide: {
    flex: 0.3,
    backgroundColor: "green",
  },
  liveStatus: {
    marginLeft: 20,
  },
  cardHolder: {
    margin: 20,
  },
}));

const LiveData = () => {
  const classes = useStyles();
  const [countrySelected, setCountrySelected] = useState("global");
  const [selectedData, setSelectedData] = useState({
    cases: 0,
    todayCases: 0,
    recovered: 0,
    todayRecovered: 0,
    deaths: 0,
    todayDeaths: 0,
  });

  const ApiInitialCountriesList = async () => {
    const url = `https://disease.sh/v3/covid-19/all`;
    const apiData = await Axios.get(url);
    console.log(apiData.data);
    setSelectedData({
      cases: apiData.data.cases,
      todayCases: apiData.data.todayCases,
      recovered: apiData.data.recovered,
      todayRecovered: apiData.data.todayRecovered,
      deaths: apiData.data.deaths,
      todayDeaths: apiData.data.todayDeaths,
      updated: apiData.data.updated,
    });
  };

  useEffect(() => {
    ApiInitialCountriesList();
  }, []);
  console.log(selectedData);
  return (
    <div className={classes.root}>
      <div className={classes.leftSide}>
        <div className={classes.inLeftContent}>
          <div className={classes.imgedit}>
            <img src={headerImg} className={classes.imgChild} alt="COVID-19" />
          </div>
        </div>

        <div className={classes.cardHolder}>
          <Grid container justify="space-between" spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <LiveStatus setCountrySelected={setCountrySelected}></LiveStatus>
            </Grid>

            <Grid container item xs={12} sm={12} md={12} lg={9}>
              <Grid item xs={12} sm={4} md={4}>
                <ResultCard
                  data={{
                    total: selectedData.cases,
                    today: selectedData.todayCases,
                    updated: selectedData.updated,
                  }}
                  case="CONFIRMED"
                  cardColor={{
                    bgColor: "rgb(255,245,245)",
                    headerColor: "rgb(254,215,215)",
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <ResultCard
                  data={{
                    total: selectedData.recovered,
                    today: selectedData.todayRecovered,
                    updated: selectedData.updated,
                  }}
                  case="RECOVERY"
                  cardColor={{
                    bgColor: "rgb(240,255,244)",
                    headerColor: "rgb(198,246,213)",
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <ResultCard
                  data={{
                    total: selectedData.deaths,
                    today: selectedData.todayDeaths,
                    updated: selectedData.updated,
                  }}
                  case="DEATHS"
                  cardColor={{
                    bgColor: "rgba(237, 242, 247, 0.626)",
                    headerColor: "rgb(226,232,240)",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* <LiveStatus setCountrySelected={setCountrySelected}></LiveStatus>
          <div className={classes.resultCard}>
            <ResultCard
              data={{
                total: selectedData.cases,
                today: selectedData.todayCases,
                updated: selectedData.updated,
              }}
              case="CONFIRMED"
              cardColor={{
                bgColor: "rgb(255,245,245)",
                headerColor: "rgb(254,215,215)",
              }}
            />

            <ResultCard
              data={{
                total: selectedData.recovered,
                today: selectedData.todayRecovered,
                updated: selectedData.updated,
              }}
              case="RECOVERY"
              cardColor={{
                bgColor: "rgb(240,255,244)",
                headerColor: "rgb(198,246,213)",
              }}
            />

            <ResultCard
              data={{
                total: selectedData.deaths,
                today: selectedData.todayDeaths,
                updated: selectedData.updated,
              }}
              case="DEATHS"
              cardColor={{
                bgColor: "rgba(237, 242, 247, 0.626)",
                headerColor: "rgb(226,232,240)",
              }}
            /> 
          </div>*/}
        </div>
      </div>
      <div className={classes.rightSide}>I am the table app__right</div>
    </div>
  );
};

export default LiveData;
