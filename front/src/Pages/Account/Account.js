import {useEffect, useState} from 'react';
<<<<<<< HEAD
import axios from 'axios'
import { URL_VOTE } from "../../Config/Config"
import { URL_UPDATE } from "../../Config/Config"
import { URL_DELETE } from "../../Config/Config"

export default function Account() {
    const [votes, setVotes] = useState([]);
    const [input, setInput] = useState({});
    const idUser =  window.localStorage.getItem("userId");
    console.log(idUser);

    const refreshData = async () => {
        const res = await axios.get(URL_VOTE);
        setVotes(res.data.data);
    }
    
    const updateUser = async () => {
        const res = await axios.put(URL_UPDATE + idUser, input)
        if (res) {
=======
import { useLocation } from 'react-router-dom';
import UsersAPI from "../../Services/UsersAPI";
import './Account.css';


export default function Account(){
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
>>>>>>> MachinMax
            alert("User updated");
        } else {
            alert("Error");
        }
    }

    const deleteVote = async (id) => {
<<<<<<< HEAD
        const res = await axios.delete(URL_DELETE + id);
        if (res) {
=======
        const data = await UsersAPI.deleteVote(id);
        if (data) {
>>>>>>> MachinMax
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
<<<<<<< HEAD
        <main style={{display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '5vh'}}>
            <h1>Account</h1>
            <h3>Information</h3>
                <form style={{display: 'flex', flexDirection: 'column', margin: 'auto', marginTop: '-3vh', gap: '1vh', backgroundColor: '#8080801f', borderRadius: '2vh', padding: '5vh'}}>
                    <label for="username">Username</label>
                    <input style={{width: '100%', height: '3vh', borderRadius: '1vh', border: 'none', padding: '1vh'}} type="text" id="username" name="username" placeholder='username' onChange={(e) => setInput( ((prevInput)=>({ ...prevInput, username: e.target.value })))}/>
                    <label for="email">Email</label>
                    <input style={{width: '100%', height: '3vh', borderRadius: '1vh', border: 'none', padding: '1vh'}} type="text" id="email" name="email" placeholder='email' onChange={(e) => setInput( ((prevInput)=>({ ...prevInput, email: e.target.value })))}/>
                    <label for="password">Password</label>
                    <input style={{width: '100%', height: '3vh', borderRadius: '1vh', border: 'none', padding: '1vh'}} type="password" id="password" name="password" placeholder="password" onChange={(e) => setInput( ((prevInput)=>({ ...prevInput, password: e.target.value })))}/>
                    <button style={{padding: '0.5vh', backgroundColor: '#ffe37a'}} onClick={() => updateUser()}>Update</button>
                </form>
            <h3>My votes</h3>
            <ul style={{display: 'grid', gridTemplateColumns: 'repeat(4, 200px)', margin: 'auto', listStyle: 'none', marginTop: '-2vh'}}>
                {votes.map((vote) => (
                    <li key={vote.id} style={{border: 'solid', borderRadius: '1vh 1vh 3vh 3vh', padding: '3vh', display: 'flex', flexDirection: 'column', gap: '2vh'}}>
                        <img src={vote.attributes.athlete.data.attributes.image} alt={vote.attributes.athlete.data.attributes.name} />
                        <p>{vote.attributes.athlete.data.attributes.name}</p>
                        <button style={{padding: '0.5vh', backgroundColor: '#ea4040', color: 'white'}} onClick={() => deleteVote(vote.id)}>Delete</button>
=======
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
                    <button onClick={() => updateUser()}>Update</button>
                </form>
            <h3>My votes</h3>
            <ul>
                {votes.map((vote) => (
                    
                    <li key={vote.id}>
                        {console.log(vote)}
                        <div>
                            <img src={`https://c-14-api.jo4marseille.fr${vote.athlete.photoAthlete.url}`} alt={vote.athlete.nom}/>
                        </div>
                       
                        <p>{vote.athlete.prenom + " " + vote.athlete.nom}</p>
                        <p>DJiscipline: {vote.athlete.sport.nom}</p>
                        <button onClick={() => deleteVote(vote.id)}>Delete</button>
>>>>>>> MachinMax
                    </li>
                ))}
            </ul>
        </main>
    );
}