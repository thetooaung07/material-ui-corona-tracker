import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth: 250,
  },
  
  title: {
    textAlign: "center",
  },
  caseName: {
    marginTop: "10px",
    textAlign: "center",
    letterSpacing: "4px",
  },
  cardContentEdit: {
    paddingLeft: '0',
    paddingRight: '0',
    
  }
});

const ResultCard = (props) => {
  const { data } = props;
  const title = props.case;

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContentEdit}>
        <Typography
          className={classes.title}
          color="textPrimary"
          gutterBottom
          variant="h5"
          component="h2"
        >
          <CountUp start={0} end={data.value} duration={4} />
        </Typography>
        <Divider></Divider>
        <Typography className={classes.caseName} variant="subtitle1">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
