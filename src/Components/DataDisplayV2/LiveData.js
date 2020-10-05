import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import LiveStatus from "./LiveStatus";
import { makeStyles } from "@material-ui/core/styles";
import ResultCard from "./ResultCard";
// import headerImg from "../../img/headerImg.png";
import Axios from "axios";
import Table from "./Table";
import { sortedData } from "../../utils";
import LineGraph from "./LineGraph";
import Map from "./Map";
import Loader from "../Home/Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "`max-content`",
    width: "100vw",
    overflowX: "hidden",
    paddingRight: 18,
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
    },
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginLeft: 0,
    },
  },
  imgedit: {
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
  },
  imgChild: {
    maxWidth: "100%",
    height: "auto",
  },

  inLeftContent: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "red",
    flexWrap: "wrap",
  },
  leftSide: {
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      margin: 25,
    },
    // backgroundColor: "yellow",
  },
  rightSide: {
    flex: 0.3,
    maxWidth: 341,
    marginTop: 1,
    // backgroundColor: "trans",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
    // backgroundColor: "white",
  },
  liveStatus: {
    marginLeft: 20,
  },
  cardHolder: {
    margin: 20,
    // marginBottom: 40
  },
  mapTableContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    margin: 20,
  },
}));

const LiveData = () => {
  const classes = useStyles();
  const [isLoading, setisLoading] = useState(true);
  const [countrySelected, setCountrySelected] = useState("global");
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState([31, -7]);
  // const [zoom, setZoom] = useState(3); // bug error cannot change along with map Center
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  const [selectedData, setSelectedData] = useState({
    cases: 0,
    todayCases: 0,
    recovered: 0,
    todayRecovered: 0,
    deaths: 0,
    todayDeaths: 0,
  });

  const ApiInitialCountriesList = async () => {
    const modUrl =
      countrySelected === "global"
        ? `https://disease.sh/v3/covid-19/all`
        : `https://disease.sh/v3/covid-19/countries/${countrySelected}`;
    const apiData = await Axios.get(modUrl);
    // console.log(apiData.data);
    setSelectedData({
      cases: apiData.data.cases,
      todayCases: apiData.data.todayCases,
      recovered: apiData.data.recovered,
      todayRecovered: apiData.data.todayRecovered,
      deaths: apiData.data.deaths,
      todayDeaths: apiData.data.todayDeaths,
      updated: apiData.data.updated,
      country: apiData.data.country,
    });

    const url = `https://disease.sh/v3/covid-19/countries`;
    const tableApi = await Axios.get(url);
    setMapCountries(tableApi.data);
    const sortData = sortedData(tableApi.data);
    setTableData(sortData);
  };

  useEffect(() => {
    ApiInitialCountriesList();
    // eslint-disable-next-line
  }, [countrySelected]);

  // Timer to show Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={classes.root}>
      {isLoading ? (
        <Loader open={isLoading}></Loader>
      ) : (
        <div className={classes.flexContainer}>
          <div className={classes.leftSide}>
            {/* <div className={classes.inLeftContent}>
            <div className={classes.imgedit}>
              <img
                src={headerImg}
                className={classes.imgChild}
                alt="COVID-19"
              />
            </div>
          </div> */}

            <div className={classes.cardHolder}>
              <Grid container justify="space-between" spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={3}>
                  <LiveStatus
                    setMapCenter={setMapCenter}
                    setCountrySelected={setCountrySelected}
                  ></LiveStatus>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={3}>
                  <ResultCard
                    active={casesType === "cases"}
                    onClick={(e) => setCasesType("cases")}
                    borderColor="#CC1034"
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

                <Grid item xs={12} sm={4} md={4} lg={3}>
                  <ResultCard
                    active={casesType === "recovered"}
                    onClick={(e) => setCasesType("recovered")}
                    borderColor="#7dd71d"
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

                <Grid item xs={12} sm={4} md={4} lg={3}>
                  <ResultCard
                    active={casesType === "deaths"}
                    onClick={(e) => setCasesType("deaths")}
                    borderColor="grey"
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
            </div>

            <div className={classes.mapTableContainer}>
              <Map
                casesType={casesType}
                mapCountries={mapCountries}
                zoom={4}
                mapCenter={mapCenter}
              ></Map>

              <LineGraph casesType={casesType} />
            </div>
          </div>

          <div className={classes.rightSide}>
            <Grid container>
              <Grid container item xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={1} sm={3}></Grid>
                <Grid item xs={10} sm={6} md={12} lg={12}>
                  <Table data={tableData}></Table>
                </Grid>
                <Grid item xs={1} sm={3}></Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveData;
