import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import '../../nested.css';
import { useEffect, useState } from "react";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const MyList = styled(ListItem)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});


const useStyles = makeStyles((theme) => ({
  root1: {
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
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
},
nested: {
    paddingLeft: theme.spacing(4),
}
}));





export default function CoursSearch() {
  const classes = useStyles();
  const [cours, setcours] = React.useState()
  const [motCle, setMotCle] = React.useState()
  const handleSearchClick = (motCle,e) => {
   e.preventDefault();
       console.log(`http://localhost:8080/Cours/get/${motCle}`);
        fetch(`http://localhost:8080/Cours/get/${motCle}`, {
            method: "GET",
        }).then(res => res.json())
            .then(data => {
              setcours(data);
            })
};

  return (
    <div className={classes.coursSearch} >
      <div className={classes.search}>
    <Paper component="form" className={classes.root1}>
      <InputBase
        className={classes.input}
        placeholder="Chercher un cours"
        inputProps={{ 'aria-label': 'Chercher un cours' }}
        value={motCle} onChange={e => setMotCle(e.target.value)}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search"  onClick={(e) => handleSearchClick(motCle,e)}>
        <SearchIcon />
      </IconButton>
    </Paper>
    </div>
    <List 
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            {cours && cours !== null ?
                    <div >
                        <MyList className="list" button>
                            <ListItemText id="cours" primary={cours.nom.toUpperCase()} />
                        </MyList><br />     
                        <Collapse in={true} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableRow>
                                            <StyledTableCell id="nested-list-subheader">Mot Clé</StyledTableCell>
                                            <StyledTableCell id="nested-list-subheader" align="right">Description</StyledTableCell>
                                            <StyledTableCell id="nested-list-subheader" align="right">Support</StyledTableCell>
                                        </TableRow>
                                        <TableBody>
                                                    <StyledTableRow key={cours.motCle}>

                                                        <StyledTableCell component="th" scope="row">{cours.motCle}</StyledTableCell>
                                                        <StyledTableCell align="right">{cours.description}</StyledTableCell>
                                                        <StyledTableCell align="right"><a href = {cours.pdfLink} target = "_blank">{cours.pdfLink}</a></StyledTableCell>
                                                    </StyledTableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </List>
                        </Collapse>
                    </div>:("")
            }
        </List >
    </div>
  );
}
