import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const useStyle = makeStyles((theme) => ({
  footerStyle: {
    // position: "fixed",
    // bottom: 0,
    // left: 0,
    // right: 0,
     minHeight: 70,
    // backgroundColor: " rgba(158,158,158,0.5)",
    // backgroundColor: "#4b5d67",
    backgroundColor: " #931a25",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  flexIcon: {
    flex: 0.4,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    "& > *": {
      marginRight: theme.spacing(3),
    },
  },
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footerStyle}>
      <Typography variant="subtitle1" style={{ paddingLeft: "20px" }}>
        <Box fontFamily="Monospace" fontSize="h6.fontSize">
          Copyright&thinsp;&copy;&thinsp;2020. All right reserved.
        </Box>
      </Typography>

      <div className={classes.flexIcon}>
        <Typography variant="subtitle1" style={{ whiteSpace: "nowrap" }}>
          Contact us
        </Typography>

        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
    </div>
  );
};

export default Footer;
