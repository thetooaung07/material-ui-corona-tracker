import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const useStyle = makeStyles({
  footerStyle: {
    height: 50,
    // backgroundColor: " rgba(158,158,158,0.5)",
    backgroundColor: "#4b5d67",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexIcon: {
    flex: 0.4,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footerStyle}>
      <Typography variant="subtitle1" style={{ paddingLeft: "20px" }}>
        <Box fontFamily="Monospace" fontSize="h6.fontSize">
          Copyright&thinsp;&copy;&thinsp;2020. All right reserved to xxXXXxx
        </Box>
      </Typography>
      <Typography variant="subtitle1" className={classes.flexIcon} style={{ paddingRight: "20px" }}>
        Contact us 
        
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Typography>
    </div>
  );
};

export default Footer;
