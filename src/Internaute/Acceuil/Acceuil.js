import './Acceuil.css';
import React, { Component } from 'react';
import imageEnsa from './imageEnsa.jpg'; 

export default class Acceuil extends Component {
    render() {
        return (
            <div className="Acceuil">
                <img alt="" src={imageEnsa}/>
                <p>
                    L’Ecole Nationale des Sciences Appliquées de Khouribga est un établissement public relevait de l’Université Hassan 1er depuis sa création en 2007. Elle venait appuyer la volonté gouvernementale dans le cadre de l’initiative nationale  de  formation  de 10.000 ingénieurs à l’horizon 2010.
Elle a pour objectif  la dynamisation de l’environnement socio-économique et la réponse aux besoins régionaux et nationaux en matière d’ingénierie. Elle s’inscrit dans le cadre de la décentralisation de l’enseignement supérieur. A partir du 1er Septembre 2018 et dans le cadre de la mise en oeuvre de la régionalisation avancée, l'ENSA de Khouribga est rattachée à l'Université Sultan Moulay Slimane.
                </p>
                <h3> Mission de l'ENSA de Khouribga</h3>
                <ul>
                    <li>Elle s’inscrit dans le cadre de décentralisation de l’enseignement supérieur.</li>                      
                    <li>Elle a pour objectif la dynamisation de l’environnement socio-économique.</li>
                    <li>Elle répond aux besoins régionaux et nationaux en matière d’ingénierie.</li>
                    <li>Elle forme des ingénieurs d’état pluridisciplinaires.</li>
                </ul>

                <h3> Formation</h3>
                <p>L'ENSA de Khouribga comprend actuellement quatre génies  :</p>
                <ul>
                    <li>Génie réseaux et télécommunications</li>
                    <li>Génie électrique (Ingénierie des systèmes embarqués et commandes numériques)</li>
                    <li>Génie informatique</li>
                    <li>Génie des procédés de l'énergie et de l'environnement</li>
                    <li>Informatique et Ingénierie des Données </li>
                </ul>

                <h3>Admission</h3>
                <p>L'admission à l'ENSA de Khouribga se fait par le biais de :</p>
                <ul>
                    <li>Présélection des candidats sur la base de la moyenne générale obtenue au baccalauréat.</li>
                    <li>Concours écrit auquel sont convoqués les candidats présélectionnés.</li>
                </ul>
                <p>Il est possible d'intégrer l'ENSA de Khouribga en Cycle Ingénieur au niveau bac+2 par voie de concours. La formation dure alors 3 ans après 2 ans post-BAC. Ce type d'admission est ouvert aux étudiants des classes préparatoires, DUT, DEUG ou Licences des Facultés des Sciences (FS) et Facultés des Sciences et Techniques (FST). L'admission en 2e année du Cycle Ingénieur (4e année) est possible pour les étudiants ayant obtenu un Master.</p>
            </div>
        )
    }
}
