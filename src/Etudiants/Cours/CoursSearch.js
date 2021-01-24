import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  search:{
    display: 'flex',
    justifyContent:'center',
    alignSelf: 'center',
    marginBottom:'50px'
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


export default function CoursSearch() {
  const classes = useStyles();

  return (
    <div className={classes.coursSearch} >
      <div className={classes.search}>
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Chercher un cours"
        inputProps={{ 'aria-label': 'Chercher un cours' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    </div>
    {rows.map((row) => (
           <div> <ChevronRightIcon></ChevronRightIcon>{row.annee} {row.gi}</div>
          ))}
    </div>
  );
}
