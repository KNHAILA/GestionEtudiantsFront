import './App.css';
import Login from './Login/login'


import EmploiTemps from './Internaute/EmploiTemps/EmploiTemps';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import CoursSearch from './Etudiants/Cours/CoursSearch';
import CoursListe from './Etudiants/Cours/CoursListe';
import Service from './Etudiants/Service/Service';
import Acceuil from './Internaute/Acceuil/Acceuil';
import NavBar from './NavBar/NavBar';
import Notes from './Etudiants/Statistiques/notes'
import Chart from './Etudiants/Statistiques/absences'
import GestionCours from './Admin/Cours/GestionCours'
import TraitementDemandes from './Admin/Service/TraitementDemandes'
import { useEffect, useState } from "react";
import signUp from'./Login/signUp'

function App() {
  const [user, setUser]= useState("internaute")

  const getUser=(usr)=>{
      setUser(usr)
      console.log(usr)
  }
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar user={user}/>
          <Switch>
            <Route exact path='/login'  render={(props)=><Login  getUser={getUser}/>}/>
            <Route exact path='/EmploiDuTemps' component={EmploiTemps} />
            <Route exact path='/AcceuilInternaute' component={Acceuil} />
            <Route exact path='/' component={Acceuil} />
            <Route exact path='/Services' component={Service} />
            <Route exact path='/ListeCours' component={CoursListe} />
            <Route exact path='/ChercherCours' component={CoursSearch} />
            <Route exact path='/Notes' component={Notes} />
            <Route exact path='/GestionCours' component={GestionCours} />
            <Route exact path='/signUp' component={signUp} />
            <Route exact path='/serviceAdmin' component={TraitementDemandes} />
          <Route exact path='/Absences' component={Chart} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
