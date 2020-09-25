import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {Badge as MuiBadge, withStyles} from '@material-ui/core';
// import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -13,
    top: 9,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 3px',
  },
}))(MuiBadge);

const Badge = (props) => {
  const {todayCases} = props
  return (
    <span >
      <StyledBadge showZero max={999} badgeContent={`+${todayCases}`}  color="error"  >
        {props.children}
      </StyledBadge>
    </span>
  );
}

export default Badge
