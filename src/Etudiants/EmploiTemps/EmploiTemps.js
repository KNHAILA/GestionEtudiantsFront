import './EmploiTemps.css'
import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import pdf from './pdf1.png'; 

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "maroon",
    color: theme.palette.common.white,
    fontFamily: "Comic Sans MS",
    fontSize: 18
  },
  body: {
    backgroundColor: "maroon",
    color: theme.palette.common.white,
    fontSize: 18,
    fontFamily: "Comic Sans MS"
  }
}))(TableCell);


function createData(annee, gi, giid) {
  return {annee, gi, giid };
}

const rows = [
  createData("Première Année", "/CoursBI.pdf","/CoursBI.pdf"),
  createData("Deuxième Année",  "/CoursBI.pdf","/CoursBI.pdf"),
  createData("Troisième Année",  "/CoursBI.pdf","/CoursBI.pdf")
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function EmploiTemps() {
  const classes = useStyles();


  return (
      <div className="EmploiTemps">
          <p>Emplois du temps du premier semestre au titre de l' Année Universitaire 2020/2021: Vous êtes tenus de les consulter régulièrement pour être informés de toute éventuelle modification. </p>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <StyledTableCell>Génie Informatique</StyledTableCell>
            <StyledTableCell>Génie d'Ingénierie des Données</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.annee}>
              <StyledTableCell>{row.annee}</StyledTableCell>
              <TableCell align="center"><a href = {row.gi} target = "_blank">Consulter<img alt="" src={pdf} style={{width: "40px", height: "40px", verticalAlign: "middle"}}/></a></TableCell>
              <TableCell align="center"><a href = {row.gi} target = "_blank">Consulter<img alt="" src={pdf} style={{width: "40px", height: "40px", verticalAlign: "middle"}}/></a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
