import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Button } from '@material-ui/core';
import MenuCours from './Menus/MenuCours';
import MenuStatistiques from './Menus/MenuStatistiques';

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

export default function NavBar() {
  const classes = useStyles();

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
            <Button color="inherit">Acceuil</Button>
            <Button color="inherit">Emploi du temps</Button>
            <MenuCours />
            <Button color="inherit">Services</Button>
            <MenuStatistiques />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
