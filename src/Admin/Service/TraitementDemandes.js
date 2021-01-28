import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Grid, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing(2),

    },
    nested: {
        paddingLeft: theme.spacing(4),
    },

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

export default function TraitementDemandes() {
    const classes = useStyles();
    const [services, setServices] = React.useState([

        {
            id: "1",
            nom: "Service 1",
            open: false,
            nombre: "2",
            plusInfo: "plus d'informations plus d'informations",
            etudiants: [
                {
                    id: "01",
                    cne: " LFG13344",
                    nom: "GHAFFOUR",
                    prenom: "Mina",
                    dateNaissance: "16/08/1998",
                    tel: "06666666",
                    email: "minaghaffour@gmail.com",
                    adressse: "Azilal",
                    classe: "GI3",
                    open: false
                },
                {
                    id: "02",
                    cne: " LFG13344",
                    nom: "GHAFFOUR",
                    prenom: "Mina",
                    dateNaissance: "16/08/1998",
                    tel: "06666666",
                    email: "minaghaffour@gmail.com",
                    adressse: "Azilal",
                    classe: "GI3",
                    open: false
                }
            ]
        },
        {
            id: "2",
            nom: "Service 2",
            open: false,
            nombre: "5",
            plusInfo: "plus d'informations plus d'informations",
            etudiants: [
                {
                    id: "03",
                    cne: " LFG13344",
                    nom: "GHAFFOUR",
                    prenom: "Mina",
                    dateNaissance: "16/08/1998",
                    tel: "06666666",
                    email: "minaghaffour@gmail.com",
                    adressse: "Azilal",
                    classe: "GI3",
                    open: false
                },
                {
                    id: "03",
                    cne: " LFG13344",
                    nom: "GHAFFOUR",
                    prenom: "Mina",
                    dateNaissance: "16/08/1998",
                    tel: "06666666",
                    email: "minaghaffour@gmail.com",
                    adressse: "Azilal",
                    classe: "GI3",
                    open: false
                }
            ]
        }
    ])

    const handleClick = (id) => {
        services && services.map(ser => {
            if (ser.id === id) {
                ser.open = !ser.open;
            }
        })
        setServices([...services])
    };

    const handleClickEtud = (id) => {
        services && services.map(ser => {
            ser.etudiants && ser.etudiants.map(etud => {
                if (etud.id === id) {
                    etud.open = !etud.open;
                }
            })

        })
        setServices([...services])

    };
    const handleAccepter = () => {

    }
    const handleRefuser = () => {

    }

    return (
        <div className="services" >
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Demandes
        </ListSubheader>
                }
                className={classes.root}
            >
                {services && services.map(ser => {

                    return (
                        <div >


                            <div  >
                                <Badge className="list" badgeContent={ser.nombre} color="error"
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'

                                    }}
                                >
                                    <MyList button onClick={() => handleClick(ser.id)}>

                                        <ListItemText id="ser" primary={ser.nom.toUpperCase()} />
                                        {ser.open ? <ExpandLess /> : <ExpandMore />}
                                    </MyList>
                                </Badge>
                            </div><br />
                            <Collapse in={ser.open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>

                                    <TableContainer className="list" component={Paper}>
                                        <Table className={classes.root} aria-label="customized table">
                                            <TableBody>

                                                {ser.etudiants && ser.etudiants.map(etudiant => {
                                                    return (
                                                        <React.Fragment >
                                                            <StyledTableRow key={etudiant.id} onClick={() => handleClickEtud(etudiant.id)}>
                                                                <StyledTableCell component="th" scope="row">{etudiant.cne}</StyledTableCell>
                                                                <StyledTableCell>{etudiant.nom + " " + etudiant.prenom}</StyledTableCell>
                                                                <StyledTableCell align="right" >{etudiant.classe}</StyledTableCell>
                                                                <StyledTableCell>{etudiant.open ? <ExpandLess /> : <ExpandMore />}</StyledTableCell>

                                                            </StyledTableRow>
                                                            <Collapse className="list" in={etudiant.open} timeout="auto" unmountOnExit>
                                                                <List component="div" disablePadding>
                                                                    <ListItemText className="list" primary={ser.plusInfo} />
                                                                    <Grid container spacing={2}
                                                                        direction="row"
                                                                        justify="flex-end"
                                                                        alignItems="center">
                                                                        <Grid item>
                                                                            <Button variant="contained" onClick={() => handleAccepter()}>Accepter</Button>

                                                                        </Grid> 
                                                                         <Grid item>
                                                                            <Button className="btns" variant="contained" onClick={() => handleRefuser()}>Refuser</Button>
                                                                        </Grid> 
                                                                         </Grid>
                                                                </List>
                                                            </Collapse>
                                                        </React.Fragment>

                                                    )
                                                })
                                                }
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