import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import DelegationsAPI from "../../Services/DelegationsAPI";

export default function Delegation() {
    const [pays, setPays] = useState([]);
    const LogNav = useNavigate();

    const refreshData = async () => {
        try {
            const data = DelegationsAPI.findPays().then(response => {
                setPays(response.data.data);
                console.log(response.data.data);
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelegation = (id) => {
        LogNav(`/delegation/${id}`);
    }

    useEffect(() => {
        refreshData();
    }, []);

    return (
        <main style={{display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '5vh'}}>
            <h1>Délégation</h1>
            <ul style={{display: 'grid', gridTemplateColumns: 'repeat(4, 200px)', margin: 'auto', listStyle: 'none', marginTop: '-2vh', gap: '1em'}}>
                {pays.map((pays) => (
                    <li onClick={() => handleDelegation(pays.id)} key={pays.id} style={{border: 'solid', borderRadius: '1vh 1vh 3vh 3vh', padding: '3vh', display: 'flex', flexDirection: 'column', gap: '2vh'}}>
                        <img src={pays.attributes.drapeau} alt={pays.attributes.nom} />
                        <p style={{textTransform: 'uppercase'}}>{pays.attributes.nom}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}