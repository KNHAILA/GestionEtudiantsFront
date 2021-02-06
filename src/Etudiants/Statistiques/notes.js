import React from 'react';
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
import Paper from '@material-ui/core/Paper';
import '../../nested.css';
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    margin:{
        marginTop:'50px',
        marginLeft:'200px',
        marginRight:'200px'
    }

}));

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
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});

export default function Notes() {
    const classes = useStyles();
    const [semestres, setSemestres] = React.useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/Etude/listNotes/F1`)
          .then(res => res.json())
          .then(data => {
            setSemestres(data)
          })
      },[])
    const handleClick = (id) => {
        semestres && semestres.map(sem => {
            if (sem.id === id) {
                sem.open = !sem.open;
            }
        })
        setSemestres([...semestres])


    };

    return (
    <div className={classes.margin}>
        <List 
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    NOTES
        </ListSubheader>
            }
            className={classes.root}
        >
            {semestres && semestres.map(sem => {

                return (
                    <div >

                        <MyList className="list" button onClick={() => handleClick(sem.id)}>

                            <ListItemText id="sem" primary={sem.code.toUpperCase()} />
                            {sem.open ? <ExpandLess /> : <ExpandMore />}
                        </MyList><br />
                        <Collapse in={sem.open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableRow>
                                            <StyledTableCell id="nested-list-subheader">MODULE</StyledTableCell>
                                            <StyledTableCell id="nested-list-subheader" align="right">NOTE</StyledTableCell>
                                        </TableRow>
                                        <TableBody>
                                            {sem.matieres && sem.matieres.map(module => {
                                                return (
                                                    <StyledTableRow key={module.id}>

                                                        <StyledTableCell component="th" scope="row">{module.nom}</StyledTableCell>
                                                        <StyledTableCell align="right">{module.note}</StyledTableCell>
                                                    </StyledTableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </List>
                        </Collapse>



                    </div>)
            })
            }
        </List >
</div>
    );
    
}