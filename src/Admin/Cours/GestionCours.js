import React, { Component } from 'react'
import { Grid, TextField, Button } from '@material-ui/core';
import './GestionCours.css';

export class GestionCours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cours: {
                motCle: "",
                nom: "",
                description: "",
                selectedFile: {},
                isFilePicked: false
            }
        }
    }
    handleCoursChange(newPartialInput) {
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
        this.setState(
            {
                cours: {
                    ...this.state.cours,
                    selectedFile: event.target.files[0],
                    isFilePicked: true

                }
            })
    }
    handleAddCourse = (e) => {//ajouter un cours
        e.preventDefault()
        const cours = this.state.cours
        fetch(`http://localhost:8080/Cours/add`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "motCle": cours.motCle,
                "nom": cours.nom,
                "description": cours.description,
                "pdfLink": cours.selectedFile.name,
                "matricule":localStorage.getItem("matricule")
            })
        })
        
        this.setState({//vider

            cours: {
                motCle: "",
                nom: "",
                description: "",
                selectedFile: {},
                isFilePicked: false
            }

        })

    }

    render() {
        const cours = this.state.cours
        return (
            <div className="addCourse">
                <form noValidate autoComplete="off">
                    <TextField margin="dense" size="small" fullWidth label="Mot clé du cours" variant="outlined" value={cours.motCle} onChange={e => this.handleCoursChange({ motCle: e.target.value })} /><br />
                    <TextField margin="dense" size="small" fullWidth label="Nom du cours" variant="outlined" value={cours.nom} onChange={e => this.handleCoursChange({ nom: e.target.value })} /><br />
                    <TextField
                        margin="dense"
                        size="small"
                        fullWidth
                        id="standard-multiline-flexible"
                        label="Description"
                        multiline
                        rowsMax={4}
                        variant="outlined"
                        value={cours.description}
                        onChange={e => this.handleCoursChange({ description: e.target.value })}
                    />
                    <div><Button variant="contained"> Importer le document<input type="file" style={{ position: "absolute", width: "100%", height: "100%", opacity: "0" }} name="file" onChange={this.changeHandler} /></Button> <span>{this.state.cours.selectedFile.name}</span></div><br />
                    <div className="center">
                        <Button variant="contained" onClick={e => this.handleAddCourse(e)}> Ajouter le cours</Button>
                    </div>

                </form>

            </div>
        )
    }
}

export default GestionCours
