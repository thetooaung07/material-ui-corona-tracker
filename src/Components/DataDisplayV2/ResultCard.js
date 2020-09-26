import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";
import DividerWithText from "./DividerWithText";
import Badge from "./Badge";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: " 250px",
    // border: "1px thin #e5e5ea",
    minWidth: 156,
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.12), 0 0 10px rgba(0, 0, 0, 0.06)",
    borderRadius: "6px",
  },
  title: {
    textAlign: "center",
    fontWeight: 500,
    color: " rgba(73, 73, 73,0.9)",
    fontSize: 35,
    paddingBottom: 5,
  },
  caseName: {
    marginTop: theme.spacing(0.2),
    textAlign: "center",
    letterSpacing: "4px",
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(0.8),
  },
  cardContentEdit: {
    paddingLeft: "0",
    paddingRight: "0",
    "&:last-child": {
      paddingBottom: 0,
    },
  },
}));

const ResultCard = (props) => {
  const { data, onClick, active, borderColor } = props;
  const title = props.case;
  const color = props.cardColor;

  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      onClick={onClick}
      style={{
        borderTop: active ? ` 10px solid ${borderColor}` : "none",
        marginTop: active ? "-5px " : "",
      }}
    >
      <CardContent
        className={classes.cardContentEdit}
        style={{ backgroundColor: color.bgColor }}
      >
        <Typography
          className={classes.title}
          
          variant="h5"
          component="h2"
        >
          
          <Badge color={color.bgColor}  todayCases={data.today}>
          <CountUp start={0} end={data.total} duration={2} />
          </Badge>
        </Typography>
        <DividerWithText>
          {new Date(data.updated).toDateString()}
        </DividerWithText>
        <Typography
          className={classes.caseName}
          variant="subtitle1"
          style={{ backgroundColor: color.headerColor }}
        >
          {title}
          {/* <Badge color={color.bgColor}  todayCases={data.today}></Badge> */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
