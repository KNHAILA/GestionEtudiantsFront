import './App.css';
import Login from './Login/login'
import NavBar from './Etudiants/NavBarStudent/NavBar';
import Acceuil from './Etudiants/Acceuil/Acceuil';
import EmploiTemps from './Etudiants/EmploiTemps/EmploiTemps';
import { BrowserRouter, Router } from 'react-router-dom';
import CoursSearch from './Etudiants/Cours/CoursSearch';
import CoursListe from './Etudiants/Cours/CoursListe';
import Service from './Etudiants/Service/Service';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/> 
      <Service/>
      </BrowserRouter>
    </div>
  );
}

export default App;
