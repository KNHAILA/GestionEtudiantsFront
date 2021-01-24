import './App.css';
import Login from './Login/login'


import EmploiTemps from './Internaute/EmploiTemps/EmploiTemps';
import { BrowserRouter, Route } from 'react-router-dom';
import CoursSearch from './Etudiants/Cours/CoursSearch';
import CoursListe from './Etudiants/Cours/CoursListe';
import Service from './Etudiants/Service/Service';
import NavBarInternaute from './Internaute/NavBarInternaute/NavBarInternaute';
import Acceuil from './Internaute/Acceuil/Acceuil';
import NavBarStudent from './Etudiants/NavBarStudent/NavBarStudent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route exact path='/' component={NavBarInternaute} />*/}
        <Route exact path='/' component={NavBarStudent} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/EmploiDuTemps' component={EmploiTemps} />
        <Route exact path='/AcceuilInternaute' component={Acceuil} />
        <Route exact path='/Services' component={Service} />
        <Route exact path='/ListeCours' component={CoursListe} />
        <Route exact path='/ChercherCours' component={CoursSearch} />
        <Route exact path='/Notes' />
        <Route exact path='/Absences' />
      </BrowserRouter>
    </div>
  );
}

export default App;
