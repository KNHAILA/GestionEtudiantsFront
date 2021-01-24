import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    width: 400,
  },
  coursSearch:{
    marginTop:'50px',
    marginLeft:'200px',
    marginRight:'200px'
  }
}));


function createData(annee, gi, giid) {
  return {annee, gi, giid };
}

const rows = [
  createData("Première Année", "/CoursBI.pdf","/CoursBI.pdf"),
  createData("Deuxième Année",  "/CoursBI.pdf","/CoursBI.pdf"),
  createData("Troisième Année",  "/CoursBI.pdf","/CoursBI.pdf")
];


export default function CoursListe() {
  const classes = useStyles();

  return (
    <div className={classes.coursSearch} >
    {rows.map((row) => (
           <div> <ChevronRightIcon></ChevronRightIcon>{row.annee} {row.gi}</div>
          ))}
    </div>
  );
}
