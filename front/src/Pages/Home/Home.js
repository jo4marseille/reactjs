/* Import ReactJs */
import React, { useEffect, useState } from 'react'

/* Import style */
import './Home.css'

import AthleteAPI from '../../Services/AthleteAPI'

export default function Home() {

    const [mostVotedPlayers, setMostVotedPlayer] = useState([]) 

    const refreshData = async () => {
        try {
            const data = await AthleteAPI.findMostVoted().then(response => {
                console.log(response);
                setMostVotedPlayer(response.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    
    useEffect(() => {
        refreshData()
    }, [])

    return (
        <main className='homeSection'>
            <h1>HomePage</h1>
            {
                mostVotedPlayers.sort(function(a, b){
                    return (
                        b.attributes.votes.data.length - a.attributes.votes.data.length
                    )
                }).map((item, index) => {
                    return (
                        <div>
                            <p>{item.attributes.prenom + " " + item.attributes.nom}</p>
                            <p>Nombre de votes : {item.attributes.votes.data.length}</p>
                        </div>
                    )
                })
            }
        </main>

    )
}
