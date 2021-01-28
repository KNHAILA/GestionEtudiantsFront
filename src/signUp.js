import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom'

export class signUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                nom: "",
                prenom: "",
                email: "",
                motPasse: "",
                motPasseConfirme: "",
                type: "",
                departement: ""

            }
        }
    }

    render() {
        return (

            <div className="login">

                <Grid container direction="row" justify="space-around" alignItems="stretch">
                    <Grid item xs={5}>
                        <div className="connexion">
                            <span align="left" id="connexion">Connexion</span>
                        </div>
                        <Divider />
                        <form onSubmit={this.onSubmit} noValidate autoComplete="off">
                            <TextField type="text" size="small" margin="normal" fullWidth label="Nom" variant="outlined"  /><br />
                

                            <TextField type="text" size="small" margin="normal" fullWidth label="Prenom" variant="outlined"  /><br />
                            <TextField type="password" size="small" margin="normal" fullWidth label="Mot de passe" variant="outlined"  /><br />
                            <TextField type="password" size="small" margin="normal" fullWidth label="Confirmer" variant="outlined"  /><br />
                            <Grid
                                container
                                direction="column"
                                justify="space-around"
                                alignItems="flex-end"
                            >
                                <Grid item>
                                    <Button type="submit"  variant="contained">Entrer</Button>
                                </Grid>
                                <Grid item>
                                    <Link to='/mdpOublie'>Mot de passe oublié ?</Link>
                                </Grid>
                            </Grid>
                            <div id='invalid' className='center'>{this.state.error}</div>
                        </form>
                    </Grid>
                    <Grid item>
                        <div className="height"></div>
                        <Divider orientation="vertical" variant="middle" style={{ height: "180px" }} />
                    </Grid>
                </Grid>


            </div>
        )
    }
}

export default signUp
