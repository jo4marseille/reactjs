import {useEffect, useState} from 'react';
<<<<<<< HEAD
import axios from 'axios'
import { URL_PAYS } from "../../Config/Config"
import PARTICIPENT from "../../Components/Delegation/Participent"

export default function Delegation() {
    const [pays, setPays] = useState([]);

    const refreshData = async () => {
        const res = await axios.get(URL_PAYS);
        setPays(res.data.data);
        console.log(res.data.data);
=======
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
>>>>>>> MachinMax
    }

    useEffect(() => {
        refreshData();
    }, []);

    return (
<<<<<<< HEAD
        <main style={{display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '5vh'}}>
            <h1>Délégation</h1>
            <ul style={{display: 'grid', gridTemplateColumns: 'repeat(4, 200px)', margin: 'auto', listStyle: 'none', marginTop: '-2vh', gap: '1em'}}>
                {pays.map((pays) => (
                    <button onClick={PARTICIPENT} key={pays.id} style={{border: 'solid', borderRadius: '1vh 1vh 3vh 3vh', padding: '3vh', display: 'flex', flexDirection: 'column', gap: '2vh'}}>
                        <img src={pays.attributes.drapeau} alt={pays.attributes.nom} />
                        <p style={{textTransform: 'uppercase'}}>{pays.attributes.nom}</p>
                    </button>
=======
        <main class="delegation">
            <h1>Délégation</h1>
            <ul>
                {pays.map((pay) => (
                    <li onClick={() => handleDelegation(pay.id)} key={pay.id}>
                        {console.log(pay)}
                        <img src={`https://c-14-api.jo4marseille.fr${pay.attributes.drapeau.data[0].attributes.url}`} alt={pay.attributes.nom} />
                        <p>{pay.attributes.nom}</p>
                    </li>
>>>>>>> MachinMax
                ))}
            </ul>
        </main>
    );
}