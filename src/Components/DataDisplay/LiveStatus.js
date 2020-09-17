import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SlowMotionVideoRoundedIcon from '@material-ui/icons/SlowMotionVideoRounded';
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth: 250,
    margin: "0 auto",
  },

  title: {
    
  },
  pos: {
    marginBottom: 12,
  },
  // buttonEdit: {
  //   paddingLeft: 15,
  //   paddingRight: 15
  // },
  
});

const LiveStatus = () => {
  const classes = useStyles();

  return (
    
      <Card className={classes.root} >
        <CardContent>
        
        <Button
        size="large"
        variant="outlined"
        color="secondary"
        disableRipple
        disableFocusRipple
        className={classes.buttonEdit}
        startIcon={<SlowMotionVideoRoundedIcon />}
      >
        Live
      </Button>
          
          
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    
  );
};

export default LiveStatus;
