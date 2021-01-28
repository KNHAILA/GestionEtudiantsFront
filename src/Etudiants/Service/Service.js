import './Service.css';
import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
export default class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: {
                cne: "",
                nom: "",
                prenom: "",
                filiere: "",
                documentDemande: "",
                anneeEtude: "",
                plusInfo:""
            }}}
            handleServiceChange(newPartialInput) {
                this.setState(state => ({
                    ...state,
                    service: {
                        ...state.service,
                        ...newPartialInput
                    }
                }))
            }
    render() {
        const { service } = this.state;
        return (
            <div className="Service">
                <div className="Informations">
                    <p>
                        Dans un souci d’améliorer les prestations du service de scolarité de l’ENSA Khouribga, les demandes des documents administratifs (Attestation d’inscription, attestation de scolarité et relevés de notes) se feront en ligne via le formulaire suivant:</p>
                    <p>La récupération des documents aura lieu <span>tous les mardis et les jeudis de 10H00 à 13H00</span>.</p>
                    <p>
                        <span>N.B :</span>
                    </p>
                    <ul>
                        <li>Le retrait des documents doit être strictement personnel ou sur la présentation d’une procuration.</li>
                        <li>La demande des documents s’effectue 48 h d’avance.</li>
                    </ul>
                </div>
                <form onSubmit={this.onSubmit} noValidate autoComplete="off">
                                <TextField margin="dense" size="small" fullWidth label="Votre CNE:" variant="outlined" value={service.cne} onChange={e => this.handleServiceChange({ nom: e.target.value })} /><br />
                                <TextField margin="dense" size="small"  fullWidth label="Votre nom:" variant="outlined" value={service.nom} onChange={e => this.handleServiceChange({ nom: e.target.value })} /><br />
                                <TextField margin="dense" size="small"  fullWidth label="Votre prénom:" variant="outlined" value={service.prenom} onChange={e => this.handleServiceChange({ prenom: e.target.value })} /><br />
                                <FormControl size="small"  variant="outlined" margin="dense" fullWidth>
                                    <InputLabel>Votre filière:</InputLabel>
                                    <Select
                                        native
                                        value={service.filiere}
                                        onChange={e => this.handleServiceChange({ filiere: parseInt(e.target.value) })}
                                        label="Votre filière:"
                                    >
                                         <option value="1">GI1</option>
                                         <option value="2">GI2</option>
                                         <option value="3">GI3</option>
                                         <option value="4">GIID1</option>
                                         <option value="5">GIID2</option>
                                         <option value="6">GIID3</option>
                                    </Select>
                                </FormControl><br />
                                <FormControl size="small"  variant="outlined" margin="dense" fullWidth>
                                    <InputLabel>Document demandé:</InputLabel>
                                    <Select
                                        native
                                        value={service.documentDemande}
                                        onChange={e => this.handleServiceChange({ documentDemande: parseInt(e.target.value) })}
                                        label="Document demandé:"
                                    >
                                         <option value="1">Attesation d'inscription</option>
                                         <option value="2">Attesation de scolarité</option>
                                         <option value="3">Relevé de notes</option>
                                         <option value="4">Other</option>
                                    </Select>
                                </FormControl><br />
                                <FormControl size="small"  variant="outlined" margin="dense" fullWidth>
                                    <InputLabel>Précisez l'année conernée par cette demande:</InputLabel>
                                    <Select
                                        native
                                        value={service.anneeEtude}
                                        onChange={e => this.handleServiceChange({ anneeEtude: parseInt(e.target.value) })}
                                        label="Précisez l'année conernée par cette demande:"
                                    >
                                        <option value="1">API1</option>
                                         <option value="2">API2</option>
                                         <option value="3">GI1</option>
                                         <option value="4">GI2</option>
                                         <option value="5">GI3</option>
                                         <option value="6">GIID1</option>
                                         <option value="7">GIID2</option>
                                         <option value="8">GIID3</option>
                                    </Select>
                                </FormControl><br />
                                <TextField
          label="Plus d'informations concernant le document demandé:"
          margin="dense" size="small" fullWidth 
          multiline
          rows={4}
          variant="outlined"
          value={service.plusInfo} onChange={e => this.handleServiceChange({ plusInfo: e.target.value })}
        />
                                <div className="center">
                                    <Button type="submit" variant="contained">Envoyer</Button>
                                </div>
                            </form>
            </div>
        )
    }
}
