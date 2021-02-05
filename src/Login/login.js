import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";


export default function Login({ getUser }) {
    const [user, setUser] = useState(
        {
            login: "",
            password: ""
        })
    const [usr, setUsr] = useState('')
    const [error, setError] = useState('')
    const [isError, setisError] = useState(false)
    const [redirect, setRedirect] = useState(null)
    function handleUserChange(newPartialInput) {
        setUser({

            ...user,
            ...newPartialInput

        })
    }
    const authentification = (e, id, pwd) => {
        e.preventDefault()
        fetch(`http://localhost:8080/Utilisateur/id/password/${id}/${pwd}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: "GET"
        })
            .then(res => res.text())
            .then(data => {
                console.log(data)

                if (data !== 'DoesExist') {
                    getUser(data)
                    setRedirect({ redirect: "/AcceuilInternaute" })
                    if(data==="admin"){
                        localStorage.setItem("matricule", user.login);
                    }else{
                        localStorage.setItem("cne", user.login);

                    }
                } else {
                    setisError(true)
                    setError('compte invalide')
                }
            })
    }
    if (redirect) {
        return <Redirect to={redirect} />
    } else {
        return (
            <div className="login">
                <Grid container direction="row" justify="space-around" alignItems="stretch">
                    <Grid item xs={5}>
                        <div className="connexion">
                            <span align="left" id="connexion">Connexion</span>
                        </div>
                        <Divider />
                        <form onSubmit={e => authentification(e, user.login, user.password)} noValidate autoComplete="off">
                            <TextField type="text" size="small" margin="normal" fullWidth label="Identifiant" variant="outlined" value={user.login} onChange={e => handleUserChange({ login: e.target.value })} /><br />
                            <TextField type="password" size="small" margin="normal" fullWidth label="Mot de passe" variant="outlined" value={user.password} onChange={e => handleUserChange({ password: e.target.value })} /><br />
                            {isError ? (<p id='error'>{error}</p>) : ('')}
                            <Grid
                                container
                                direction="column"
                                justify="space-around"
                                alignItems="flex-end"
                            >
                                <Grid item>
                                    <Button type="submit" disabled={user.login == "" || user.password == ""} variant="contained">Entrer</Button>
                                </Grid>

                                <Grid item>
                                    <Link to='/signUp'>s'inscrire ?</Link>
                                </Grid>
                            </Grid>

                        </form>
                    </Grid>
                </Grid>

            </div>
        )
    }
}