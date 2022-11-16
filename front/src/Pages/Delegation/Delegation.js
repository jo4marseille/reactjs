import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import DelegationsAPI from "../../Services/DelegationsAPI";
import './Delegation.css';

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
        <main class="delegation">
            <h1>Délégation</h1>
            <ul>
                {pays.map((pays) => (
                    <li onClick={() => handleDelegation(pays.id)} key={pays.id}>
                        <img src={pays.attributes.drapeau} alt={pays.attributes.nom} />
                        <p>{pays.attributes.nom}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}