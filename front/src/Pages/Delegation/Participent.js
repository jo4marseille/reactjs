import {useEffect, useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import DelegationsAPI from "../../Services/DelegationsAPI";

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
                setSports(response.data.data.attributes.athletes.data.attributes.sports.data);
                console.log(response.data.data);
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        refreshData();
    }, []);

    return (
        <main style={{display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '5vh'}}>
            <h1>Athlètes {delegation}</h1>
            <ul style={{display: 'grid', gridTemplateColumns: 'repeat(4, 200px)', margin: 'auto', listStyle: 'none', marginTop: '-2vh', gap: '1em'}}>
                {athletes.map((athlete) => (
                    <li key={athlete.id} style={{border: 'solid', borderRadius: '1vh 1vh 3vh 3vh', padding: '3vh', display: 'flex', flexDirection: 'column', gap: '2vh'}}>
                        <img src={athlete.attributes.image.data.attributes.url} alt={athlete.attributes.name} />
                        <p style={{textTransform: 'uppercase'}}>{athlete.attributes.name}</p>
                        {sports.map((sport) => (
                            <p key={sport.id} style={{fontStyle: 'italic'}}>discipline: {sport.attributes.nom}</p>
                        ))}
                        <button style={{padding: '0.5vh', backgroundColor: '#ffe37a'}}>Voter</button>
                    </li>
                ))}
            </ul>
        </main>
    );
}