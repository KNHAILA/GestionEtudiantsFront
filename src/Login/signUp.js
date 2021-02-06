import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export class signUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: '',
                nom: "",
                prenom: "",
                email: "",
                password: "",
                passwordConfirme: "",
                fonction: 1,
                departement: ""

            },
            error: '',
            isError: false
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
    onSubmit = (e) => {
        e.preventDefault()
        const usr = this.state.user.fonction;
        const user = this.state.user
        if (user.password === user.passwordConfirme) {
            if (usr === 2) {
                fetch(`http://localhost:8080/Etudiant/add`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "cne": user.id,
                        "nom": user.nom,
                        "prenom": user.prenom,
                        "email": user.email,
                        "password": user.password
                    })
                })

            } else {
                fetch(`http://localhost:8080/Admin/add`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "matricule": user.id,
                        "nom": user.nom,
                        "prenom": user.prenom,
                        "email": user.email,
                        "password": user.password
                    })
                })
            }
            this.setState({
                user: {
                    id: '',
                    nom: "",
                    prenom: "",
                    email: "",
                    password: "",
                    passwordConfirme: "",
                    fonction: 1,
                    departement: ""

                },
                error: '',
                isError: false
            })
        } else {
            this.setState(
                {
                    ...user,
                    error: "Les mots de passe ne convient pas",
                    isError: true
                }
            )
        }
    }

    render() {
        const user = this.state.user;
        return (
<div>
                <Grid container direction="row" justify="space-around" alignItems="stretch">
                    <Grid item xs={5}>
                 
                        <div className="connexion">
                            <span align="left" id="connexion">S'inscrire</span>
                        </div>
                        <Divider />
                        <form onSubmit={e => this.onSubmit(e)} noValidate autoComplete="off">
                            <TextField type="text" size="small" margin="normal" fullWidth label="Identifiant" value={user.id} variant="outlined" onChange={e => this.handleChange({ id: e.target.value })} /><br />
                            <TextField type="text" size="small" margin="normal" fullWidth label="Nom" value={user.nom} variant="outlined" onChange={e => this.handleChange({ nom: e.target.value })} /><br />
                            <TextField type="text" size="small" margin="normal" fullWidth label="Prenom" variant="outlined" value={user.prenom} onChange={e => this.handleChange({ prenom: e.target.value })} /><br />
                            <TextField type="email" size="small" margin="normal" fullWidth label="Email" variant="outlined" value={user.email} onChange={e => this.handleChange({ email: e.target.value })} /><br />
                            <TextField type="password" size="small" margin="normal" fullWidth label="Mot de passe" variant="outlined" value={user.password} onChange={e => this.handleChange({ password: e.target.value })} /><br />
                            <TextField type="password" size="small" margin="normal" fullWidth label="Confirmer le mot de passe" variant="outlined" value={user.passwordConfirme} onChange={e => this.handleChange({ passwordConfirme: e.target.value })} /><br />
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
                            {this.state.isError ? (<p id='error'>{this.state.error}</p>) : ('')}
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                              
                            >
                                <Grid item>
                                    <Button type="submit" variant="contained" color="primary">Entrer</Button>
                                </Grid>

                                <Grid item>
                                    <Link to='login'>Se connecter ?</Link>
                                </Grid>

                            </Grid>
                        </form>
                    </Grid>
                 
                </Grid>


            </div>
        )
    }
}

export default signUp
