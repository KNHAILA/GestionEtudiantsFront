import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Button } from '@material-ui/core';
import MenuCours from './Menus/MenuCours';
import MenuStatistiques from './Menus/MenuStatistiques';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  if (props.user === "student") {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Button color="inherit"><Link className="link" to="/AcceuilInternaute">Acceuil</Link></Button>
              <Button color="inherit"><Link className="link" to="/EmploiDuTemps">Emploi du temps</Link></Button>
              <MenuCours />
              <Button color="inherit"><Link className="link" to="/Services">Services</Link></Button>
              <MenuStatistiques />
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else if(props.user=="admin") {
    return (
     
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Button color="inherit"><Link className="link" to="/AcceuilInternaute">Accueil</Link></Button>
          <Button color="inherit"><Link className="link" to="/GestionCours">Gestion des cours</Link></Button>
          <Button color="inherit"><Link className="link" to="/serviceAdmin">Services</Link></Button>
        </Grid>
      </Toolbar>
    </AppBar>
  </div>
    )
  }else if(props.user=="internaute"){
    return(
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Button color="inherit">
            <Link to="/AcceuilInternaute" className="link">Acceuil</Link></Button>
            <Button color="inherit"><Link className="link" to="/EmploiDuTemps">Emploi du temps</Link></Button>
            <Button color="inherit"><Link className="link" to="/Login">Login</Link></Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    )
  }
}
