import React, { Component } from 'react'
import { Grid, TextField, Button } from '@material-ui/core';
import './GestionCours.css';


function buildFileSelector() {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    return fileSelector;
}

export class GestionCours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cours: {
                motCle: "",
                nom: "",
                selectedFile: {},
                isFilePicked: false
            }
        }
    }
    handleServiceChange(newPartialInput) {
        this.setState(state => ({
            ...state,
            cours: {
                ...state.cours,
                ...newPartialInput
            }
        }))
    }

    changeHandler = (event) => {
        event.preventDefault();
        console.log("text");
        console.log(event.target.files[0]);
        this.setState(
            {
                cours: {
                    ...this.state.cours,
                    nom: "bbb",
                    selectedFile: event.target.files[0],
                    isFilePicked: true

                }
            })
        console.log(this.state.cours.nom);
    }
    handleAddCourse = (e) => {
        e.preventDefault()
        this.setState({

            cours: {
                motCle: "",
                nom: "",
                selectedFile: {},
                isFilePicked: false
            }

        })

    }
    click = (event) => {
        event.preventDefault();
        console.log("Ok");
        console.log(this.state.cours.nom);
    }

    render() {
        const cours = this.state.cours
        return (
            <div className="addCourse">
                <form noValidate autoComplete="off">
                    <TextField margin="dense" size="small" fullWidth label="Mot clé du cours" variant="outlined" value={cours.motCle} onChange={e => this.handleServiceChange({ motCle: e.target.value })} /><br />
                    <TextField margin="dense" size="small" fullWidth label="Nom du cours:" variant="outlined" value={cours.nom} onChange={e => this.handleServiceChange({ nom: e.target.value })} /><br />

                    <Button variant="contained"> Importer le document<input type="file" style={{ position: "absolute", width: "100%", height: "100%", opacity: "0" }} name="file" onChange={this.changeHandler} /></Button> <span>{this.state.cours.selectedFile.name}</span>
                    <div className="center">
                        <Button variant="contained" onClick={e => this.handleAddCourse(e)}> Ajouter le cours</Button>
                    </div>

                </form>

            </div>
        )
    }
}

export default GestionCours
