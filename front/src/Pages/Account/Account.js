import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import UsersAPI from "../../Services/UsersAPI";
import './Account.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export default function Account() {
    const [votes, setVotes] = useState([]);
    const [input, setInput] = useState({});
    const { pathname } = useLocation();
    const locationPath = pathname.split('/')
    const id = locationPath[2]

    const refreshData = async () => {
        try {
            const data = UsersAPI.findUsers(id).then(response => {
                setInput(response.data);
                setVotes(response.data.votes);
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    const updateUser = async () => {
        const data = await UsersAPI.updateUser(id, input)
        if (data) {
            alert("User updated");
        } else {
            alert("Error");
        }
    }

    const deleteVote = async (id) => {
        const data = await UsersAPI.deleteVote(id);
        if (data) {
            alert("Vote deleted");
            refreshData();
        } else {
            alert("Error");
        }
    }

    useEffect(() => {
        refreshData();
    }, []);

    return (
        <main class="account">
            <h1>Account</h1>
            <h3>Information</h3>
                <form>
                    <label class="gauche" for="username">Username</label>
                    <input class="gauche" type="text" id="username" name="username" value={input.username} onChange={(e) => setInput( ((prevInput)=>({ ...prevInput, username: e.target.value })))}/>
                    <label class="droite" for="email">Email</label>
                    <input class="droite" type="text" id="email" name="email" value={input.email} onChange={(e) => setInput( ((prevInput)=>({ ...prevInput, email: e.target.value })))}/>
                    <label class="gauche" for="password">Password</label>
                    <input class="gauche" type="password" id="password" name="password" placeholder="password" onChange={(e) => setInput( ((prevInput)=>({ ...prevInput, password: e.target.value })))}/>
                    <button onClick={() => updateUser()}><FontAwesomeIcon icon={faCircleCheck} /></button>
                </form>
            <h3>My votes</h3>
            <ul>
                {votes.map((vote) => (
                    <li key={vote.id}>
                        <img src={vote.athlete.image} alt={vote.athlete.name} />
                        <p>{vote.athlete.name}</p>
                        <p>DJiscipline: {vote.athlete.sport.nom}</p>
                        <button onClick={() => deleteVote(vote.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </main>
    );
}