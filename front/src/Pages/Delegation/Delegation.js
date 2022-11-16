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
                console.log(response.data.data[0]);
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
                {pays.map((pay) => ( 
                    <li onClick={() => handleDelegation(pay.id)} key={pay.id}>
                        {console.log(pay)}
                        <img src={`http://localhost:1337${pay.attributes.drapeau.data[0].attributes.url}`} alt={pay.attributes.nom} />
                        <p>{pay.attributes.nom}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}