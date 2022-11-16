import {useEffect, useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import DelegationsAPI from "../../Services/DelegationsAPI";
import './Participent.css';

export default function Participent() {
    const [delegation, setDelegation] = useState([])
    const [athletes, setAthletes] = useState([]);
    const [sports, setSports] = useState([]);
    const { pathname } = useLocation();
    const locationPath = pathname.split('/')
    const id = locationPath[2]

    const refreshData = async () => {
        try {
            const data = DelegationsAPI.findAthletesPays(id).then(response => {
                setDelegation(response.data.data.attributes.nom);
                setAthletes(response.data.data.attributes.athletes.data);
                setSports(response.data.data.attributes.athletes.data.attributes.sport.data.attributes.nom);
                console.log(response.data.data.attributes.athletes.data.attributes.sport.data.attributes.nom);
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        refreshData();
    }, []);

    return (
        <main class='participent'>
            <h1>{delegation}</h1>
            <ul>
                {athletes.map((athlete) => (
                    <li key={athlete.id}>
                        <img src='{athlete.attributes.image.data.attributes.url}' alt={athlete.attributes.name} />
                        <p>{athlete.attributes.name}</p>
                        <p>Discipline: {sports}</p>
                        <button>Voter</button>
                    </li>
                ))}
            </ul>
        </main>
    );
}