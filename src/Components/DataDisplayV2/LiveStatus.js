import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import { Divider } from "@material-ui/core";
import CountrySelector from "./CountrySelector";


const useStyles = makeStyles({
  root: {
    //  minWidth: 250,
    //  maxWidth: 350,
    // width: "100%",
    // border: "1px solid #e5e5ea",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.12), 0 0 10px rgba(0, 0, 0, 0.06)",
    borderRadius: "6px",
  },
  content: {
    paddingTop: 10,
    paddingBottom: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  pos: {
    marginTop: 5,
    marginBottom: 10,
  },
  buttonEdit: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    color: "red",
  },
  typoEdit: {
    letterSpacing: 2,
    marginLeft: 7.5,
  },
  liveStatus: {
    fontSize: 20,
    fontWeight: 600,
    textTransform: "capitalize",
  },
});

const LiveStatus = ({ setCountrySelected,setMapCenter }) => {
  const classes = useStyles();



  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Button
          size="large"
          variant="text"
          disableRipple
          disableFocusRipple
          className={classes.buttonEdit}
          style={{ backgroundColor: "transparent" }}
          startIcon={<PlayCircleFilledRoundedIcon fontSize="large" />}
        >
          <Typography className={classes.liveStatus} variant="h6">
            Live Status
          </Typography>
        </Button>
        <Divider className={classes.pos} />
        <Typography variant="h6" className={classes.typoEdit}>
          Stats Overview
        </Typography>
        <CountrySelector setMapCenter={setMapCenter} setCountrySelected={setCountrySelected} />
      </CardContent>
    </Card>
  );
};

export default LiveStatus;
