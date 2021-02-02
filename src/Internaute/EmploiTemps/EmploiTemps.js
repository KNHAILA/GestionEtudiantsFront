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
import { useEffect, useState } from "react";
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

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function EmploiTemps() {
  const [rows, setRows] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    fetch(`http://localhost:8080/EmploiTemps/list`)
      .then(res => res.json())
      .then(data => {
        setRows(data)
      })
  },[])
  
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
        {rows && rows.length>4 ?
        <TableBody>
            <TableRow key="Première Année">
              <StyledTableCell>Première Année</StyledTableCell>
              <TableCell align="center"><a href ={rows[0].pdfLink} target = "_blank">Consulter<img alt="" src={pdf} style={{width: "40px", height: "40px", verticalAlign: "middle"}}/></a></TableCell>
              <TableCell align="center"><a href = {rows[3].pdfLink} target = "_blank">Consulter<img alt="" src={pdf} style={{width: "40px", height: "40px", verticalAlign: "middle"}}/></a></TableCell>
            </TableRow>
            <TableRow key="Deuxième Année">
              <StyledTableCell>Deuxième Année</StyledTableCell>
              <TableCell align="center"><a href = {rows[1].pdfLink} target = "_blank">Consulter<img alt="" src={pdf} style={{width: "40px", height: "40px", verticalAlign: "middle"}}/></a></TableCell>
              <TableCell align="center"><a href = {rows[4].pdfLink} target = "_blank">Consulter<img alt="" src={pdf} style={{width: "40px", height: "40px", verticalAlign: "middle"}}/></a></TableCell>
            </TableRow>
            <TableRow key="Troisième Année">
              <StyledTableCell>Troisième Année</StyledTableCell>
              <TableCell align="center"><a href = {rows[2].pdfLink} target = "_blank">Consulter<img alt="" src={pdf} style={{width: "40px", height: "40px", verticalAlign: "middle"}}/></a></TableCell>
              <TableCell align="center"><a href = {rows[5].pdfLink} target = "_blank">Consulter<img alt="" src={pdf} style={{width: "40px", height: "40px", verticalAlign: "middle"}}/></a></TableCell>
            </TableRow>
        </TableBody>:("")}
      </Table>
    </TableContainer>
    </div>
  );
}
