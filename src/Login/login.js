import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                login: "",
                password: ""
            },
            comptes: [],
            redirect: false,
            error: ''
        }
    }
    render() {
        const { user } = this.state;
        return (
            <div className="login">
                <Grid container direction="row" justify="space-around" alignItems="stretch">
                    <Grid item xs={5}>
                        <div className="connexion">
                            <span align="left" id="connexion">Connexion</span>
                        </div>
                        <Divider />
                        <form onSubmit={this.onSubmit} noValidate autoComplete="off">
                            <TextField type="text" size="small" margin="normal" fullWidth label="Identifiant" variant="outlined" value={user.login}/* onChange={e => this.handleUserChange({ login: e.target.value })} *//><br />
                            <TextField type="password" size="small" margin="normal" fullWidth label="Mot de passe" variant="outlined" value={user.password} /*onChange={e => this.handleUserChange({ password: e.target.value })}*/ /><br />
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
                            <div id='invalid' className='center'>{this.state.error}</div>
                        </form>
                    </Grid>
                </Grid>

            </div>
        )
    }
}
export default Login;