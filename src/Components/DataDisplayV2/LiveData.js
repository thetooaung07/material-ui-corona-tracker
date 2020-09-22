import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import LiveStatus from "./LiveStatus";
import { makeStyles } from "@material-ui/core/styles";
import ResultCard from "./ResultCard";
import headerImg from "../../img/headerImg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    height: "100%",
  },
  gridRoot: {
    flexGrow: 1,
    maxWidth: "100vw",
    // width: "80%",
    margin: "0 auto",
  },
  imgedit: {
    textAlign: "center",
    marginTop: "40px",
    marginBottom: " 40px",
    backgroundColor: "cyan"
  },
  rootBox: {
    display: "flex",
    height: "100%",
    marginLeft: 100,
  },
  rSideBox: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    border: "1px solid red",
  },
  lSideBox: {
    flexGrow: 0.5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "red",
  },
}));

const LiveData = () => {
  const classes = useStyles();
  const [countrySelected, setCountrySelected] = useState("global");

  return (
    <div className={classes.root}>
      <Box className={classes.rootBox}>
        <Box className={classes.rSideBox}>
          <div className={classes.imgedit} >
            <img src={headerImg} alt="COVID-19" />
          </div>
          <div>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          
          </div>
         
        </Box>
        <Box className={classes.lSideBox}>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
          Hello <br></br>
        </Box>
      </Box>

      {/* <Grid container className={classes.gridRoot} spacing={3}>
        <Grid container item xs={12} sm={12} md={9} justify="center">
          <Grid item xs={12} md={5}>
            <LiveStatus setCountrySelected={setCountrySelected}></LiveStatus>
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={12} md={3} spacing={3}>
          Hello
        </Grid>
      </Grid> */}
    </div>
  );
};

export default LiveData;

// {/*  <Grid item xs={12} sm={4} md={4}>
//             {resultData && (
//               <ResultCard
//                 data={2000}

//                 case="CONFIRMED"
//                 cardColor={{
//                   bgColor: "rgb(255,245,245)",
//                   headerColor: "rgb(254,215,215)",
//                 }}
//               ></ResultCard>
//             )}
//           </Grid>

//           <Grid item xs={12} sm={4} md={4}>
//             {resultData && (
//               <ResultCard
//                 data={2000}

//                 case="RECOVERY"
//                 cardColor={{
//                   bgColor: "rgb(240,255,244)",
//                   headerColor: "rgb(198,246,213)",
//                 }}
//               ></ResultCard>
//             )}
//           </Grid>

//           <Grid item xs={12} sm={4} md={4}>
//             {resultData && (
//               <ResultCard
//                 data={2000}

//                 case="DEATHS"
//                 cardColor={{
//                   bgColor: "rgba(237, 242, 247, 0.626)",
//                   headerColor: "rgb(226,232,240)",
//                 }}
//               ></ResultCard>
//             )}
//           </Grid> */}
