import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
                fonction: "",
                departement: ""

            }
        }
    }
    handleChange(newPartialInput) {
        this.setState(state => ({
            ...state,
            user: {
                ...state.user,
                ...newPartialInput
            }
        }))
    }

    render() {
        const  user  = this.state.user;
        return (

            <div className="login">

                <Grid container direction="row" justify="space-around" alignItems="stretch">
                    <Grid item xs={5}>
                        <div className="connexion">
                            <span align="left" id="connexion">S'inscrire</span>
                        </div>
                        <Divider />
                        <form onSubmit={this.onSubmit} noValidate autoComplete="off">
                            <TextField type="text" size="small" margin="normal" fullWidth label="Nom" value={user.nom}  variant="outlined" onChange={e => this.handleChange({ nom: e.target.value })}/><br />


                            <TextField type="text" size="small" margin="normal" fullWidth label="Prenom" variant="outlined" value={user.prenom} onChange={e => this.handleChange({ prenom: e.target.value })}/><br />
                            
                            <TextField type="email" size="small" margin="normal" fullWidth label="Email" variant="outlined" value={user.email} onChange={e => this.handleChange({ email: e.target.value })}/><br />
                            <TextField type="password" size="small" margin="normal" fullWidth label="Mot de passe" variant="outlined" value={user.motPasse} onChange={e => this.handleChange({ motPasse: e.target.value })}/><br />
                            <TextField type="password" size="small" margin="normal" fullWidth label="Confirmer le mot de passe" variant="outlined" value={user.motPasseConfirme} onChange={e => this.handleChange({ motPasseConfirme: e.target.value })}/><br />
                            <FormControl size="small" variant="outlined" margin="dense" fullWidth>
                                <InputLabel>Votre fonction</InputLabel>
                                <Select
                                    native
                                    value={user.fonction}
                                    onChange={e => this.handleChange({ fonction: parseInt(e.target.value) })}
                                    label="Votre filière:"
                                >
                                    <option value="1">Administrateur</option>
                                    <option value="2">Etudiant</option>

                                </Select>
                            </FormControl><br />
                            <Grid
                                container
                                direction="column"
                                justify="space-around"
                                alignItems="flex-end"
                            >
                                <Grid item>
                                    <Button type="submit" variant="contained">Entrer</Button>
                                </Grid>
                                
                            </Grid>
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
