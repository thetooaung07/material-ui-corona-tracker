import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    maxWidth: 400,

    backgroundColor: "rgba(158,158,158,0.5)",
    position: "absolute",
    top: "45%",
    left: " 50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    color: "white",
  },
  pos: {
    marginBottom: 12,
  },
  buttonCenter: {
    margin: "0 auto",
    color: "white",
    marginBottom: "10px",
  },
  cardBody: {
    fontWeight: "400",
    color: "white",
    textShadow: "1px 1px 3px rgba(150, 150, 150, 0.8)",
  },
});

const ContentBody = () => {
  const classes = useStyles();

  return (
    <div className="wrapper-sub">
      <Card className={classes.root} variant="outlined" raised>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            variant="h3"
            gutterBottom
          >
            Corona-Header
          </Typography>
          <Typography variant="h6" component="h6" className={classes.cardBody}>
            Coronavirus disease (COVID-19) is an infectious disease caused by a
            newly discovered coronavirus.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" className={classes.buttonCenter}>
            Learn More About Corona Virus
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ContentBody;
