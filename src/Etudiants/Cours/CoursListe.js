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
import '../../nested.css'
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
    const [coursList, setcoursList] = React.useState([])
    useEffect(() => {
      fetch(`http://localhost:8080/Cours/list`)
        .then(res => res.json())
        .then(data => {
          setcoursList(data)
        })
    },[])

    function addEditMode() {
      let data = coursList.map((e) => {
        e.open = false;
        return e;
      });
      setcoursList({ coursList: data });
    }

    const handleClick = (motCle) => {
        coursList && coursList.map(cours => {
            if (cours.motCle === motCle) {
                cours.open = !cours.open;
            }
        })
        setcoursList([...coursList])


    };

    return (
    <div className={classes.margin}>
        <List 
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                   La liste des cours
        </ListSubheader>
            }
            className={classes.root}
        >
            {coursList && coursList.map(cours => {

                return (
                    <div >
                        <MyList className="list" button onClick={() => handleClick(cours.motCle)}>
                            <ListItemText id="cours" primary={cours.nom.toUpperCase()} />
                            {cours.open ? <ExpandLess /> : <ExpandMore />}
                        </MyList><br />
                        <Collapse in={cours.open} timeout="auto" unmountOnExit>
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



                    </div>)
            })
            }
        </List >
</div>
    );
    
}