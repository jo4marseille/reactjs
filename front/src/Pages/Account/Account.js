import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import UsersAPI from "../../Services/UsersAPI";

export default function Account() {
    const [votes, setVotes] = useState([]);
    const [input, setInput] = useState({});
    const { pathname } = useLocation();
    const locationPath = pathname.split('/')
    const id = locationPath[2]

    const refreshData = async () => {
        try {
            const data = UsersAPI.findUsers(id).then(response => {
                setInput(response.data.data);
                setVotes(response.data.data.votes.data);
                console.log(response.data.data.votes.data);
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
        <main style={{display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '5vh'}}>
            <h1>Account</h1>
            <h3>Information</h3>
                <form style={{display: 'flex', flexDirection: 'column', margin: 'auto', marginTop: '-3vh', gap: '1vh', backgroundColor: '#8080801f', borderRadius: '2vh', padding: '5vh'}}>
                    <label for="username">Username</label>
                    <input style={{width: '100%', height: '3vh', borderRadius: '1vh', border: 'none', padding: '1vh'}} type="text" id="username" name="username" value={input.username} onChange={(e) => setInput( ((prevInput)=>({ ...prevInput, username: e.target.value })))}/>
                    <label for="email">Email</label>
                    <input style={{width: '100%', height: '3vh', borderRadius: '1vh', border: 'none', padding: '1vh'}} type="text" id="email" name="email" value={input.email} onChange={(e) => setInput( ((prevInput)=>({ ...prevInput, email: e.target.value })))}/>
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
                    </li>
                ))}
            </ul>
        </main>
    );
}