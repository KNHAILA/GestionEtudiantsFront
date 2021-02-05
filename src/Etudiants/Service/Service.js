import './Service.css';
import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export default class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: {
                documentDemande: 1,
                anneeEtude: "GI1",
                plusInfo: ""
            },
            services: [],
            annees: []

        }
    }
    handleServiceChange(newPartialInput) {
        this.setState(state => ({
            ...state,
            service: {
                ...state.service,
                ...newPartialInput
            }
        }))
    }
    componentDidMount() {
        fetch(`http://localhost:8080/Service/list`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    services: data
                })
            })
        fetch(`http://localhost:8080/Service/list`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    services: data
                })
            })
        fetch(`http://localhost:8080/FiliereAnnees/list`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    annees: data
                })
            })

    }
    handleAddDemande = (e) => {//ajouter un service
        e.preventDefault()
        const service = this.state.service
        fetch(`http://localhost:8080/DemandeService/add`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "cne": localStorage.getItem("cne"),
                "service": service.documentDemande,
                "description": service.plusInfo,
                "annee": service.anneeEtude
            })
        })
        this.setState({
            service: {
                documentDemande: 1,
                anneeEtude: "GI1",
                plusInfo: ""
            }
        })
    }
    render() {
        const service = this.state.service;
        console.log(service.anneeEtude)
        console.log(service.plusInfo)
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
                <form onSubmit={e => this.handleAddDemande(e)} noValidate autoComplete="off">

                    <FormControl size="small" variant="outlined" margin="dense" fullWidth>
                        <InputLabel>Document demandé:</InputLabel>
                        <Select
                            native
                            value={service.documentDemande}
                            onChange={e => this.handleServiceChange({ documentDemande: e.target.value })}
                            label="Document demandé:"
                        >
                            {this.state.services && this.state.services.map(ser => (

                                <option value={ser.id}>{ser.nom}</option>

                            ))}

                        </Select>
                    </FormControl><br />
                    <FormControl size="small" variant="outlined" margin="dense" fullWidth>
                        <InputLabel>Précisez l'année conernée par cette demande</InputLabel>
                        <Select
                            native
                            value={service.anneeEtude}
                            onChange={e => this.handleServiceChange({ anneeEtude: e.target.value })}
                            label="Précisez l'année conernée par cette demande"
                        >
                            {this.state.annees && this.state.annees.map(annee => (
                                <option key={annee.id} value={annee.annee.parseInt}>{annee.annee}</option>

                            ))}
                        </Select>
                    </FormControl><br />
                    <TextField
                        label="Plus d'informations concernant le document demandé:"
                        margin="dense" size="small" fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        value={service.plusInfo}
                        onChange={e => this.handleServiceChange({ plusInfo: e.target.value })}
                    />
                    <div className="center">
                        <Button type="submit" variant="contained">Envoyer</Button>
                    </div>
                </form>
            </div >
        )
    }
}
