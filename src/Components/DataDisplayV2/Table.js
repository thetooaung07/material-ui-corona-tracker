import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Table as MuiTable } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


import TrendingUpRoundedIcon from "@material-ui/icons/TrendingUpRounded";

const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: "10px 5px 10px 10px"
  },
  head: {
    backgroundColor: theme.palette.common.white,
    // border: "2px solid grey",
    // borderTop: "3px solid black",
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
    fontWeight: 500,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  tablePaper: {
    
    // overflowY: "scroll",
    height: 700,
    borderBottom: "5px solid #b7b7a4"
  },
  tableHead: {
    backgroundColor: "red",
  },
  tableRow: {
    backgroundColor: "cyan",
  },

  table: {},
  icontextAligner: {
    display: "flex",
    alignItems: "center",
    fontWeight: 700,
    letterSpacing: 0.5,
    fontSize: " 95%",
  },
  // rowEdit: {
  //   width: "100%",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
});
const Table = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tablePaper}>
    
      <MuiTable stickyHeader className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.icontextAligner}>
              Live Cases by Countries
              <TrendingUpRoundedIcon style={{ color: "red" }} />
            </StyledTableCell>
            <StyledTableCell align="right">Cases </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={index}>
            
              <StyledTableCell component="th" scope="row">
                {row.country}
              </StyledTableCell>
              <StyledTableCell align="right">{row.cases}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </MuiTable>
      
    </TableContainer>
  );
};

export default Table;
