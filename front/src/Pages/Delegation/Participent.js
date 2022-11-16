import {useEffect, useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import DelegationsAPI from "../../Services/DelegationsAPI";
import './Participent.css';

export default function Participent() {
    const [delegationNom, setDelegationNom] = useState([])
    const [delegationDrapeau,  setDelegationDrapeau] = useState([])
    const [athletes, setAthletes] = useState([]);
    const [sports, setSports] = useState([]);
    const { pathname } = useLocation();
    const locationPath = pathname.split('/')
    const id = locationPath[2]

    const refreshData = async () => {
        try {
            const data = DelegationsAPI.findAthletesPays(id).then(response => {
                setDelegationNom(response.data.data.attributes.nom);
                setDelegationDrapeau(response.data.data.attributes.drapeau);
                setAthletes(response.data.data.attributes.athletes.data);
            })
        } catch (error) {
            console.log(error) 
        }
    }

    useEffect(() => {
        refreshData();
    }, []);

    console.log(delegationDrapeau.data)
    // 
    return (
        <main className='participent'>
         
            <h1>{delegationNom} <img src={`https://c-14-api.jo4marseille.fr${delegationDrapeau.data !== undefined ? delegationDrapeau.data.attributes.url : ""}`}/></h1>
            
            <ul>
                {athletes.map((athlete) => (
                    <li key={athlete.id}>
                        <div>
                            <img src={`https://c-14-api.jo4marseille.fr${ athlete.attributes.photoAthlete.data.attributes.url}`} alt={athlete.attributes.nom} />
                        </div>
                        <b>{athlete.attributes.prenom + " " + athlete.attributes.nom}</b>
                        <p>{athlete.attributes.sport.data.attributes.nom}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}