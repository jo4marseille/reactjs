/* Import ReactJs */
<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
=======
import React from "react";
import AthleteAPI from "../../Services/AthleteAPI";
>>>>>>> ifanl_ibrahim

/* Import style */
import "./Home.css";

import AthleteAPI from '../../Services/AthleteAPI'

export default function Home() {
  return (
    <main className="homeSection">
      <div className="cercleBackground"></div>

<<<<<<< HEAD
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
=======
      <div class="image">
        <img src="./ressource/marina.jpg" />
        <div class="text">
          <h1>MotiVote</h1>
        </div>
      </div>

      <div className="choice">
        <div className="circle">
          <div className="circleContent">
            <h2>DISCIPLINES</h2>
          </div>
        </div>
        <div className="circle">
          <div className="circleContent">
            <h2>DÉLÉGATIONS</h2>
          </div>
        </div>
      </div>
>>>>>>> ifanl_ibrahim

      <h3>TOP 3 DES ATHLÈTE LES PLUS VOTÉS</h3>

      <div className="podium">
        <div className="podium1"></div>
        <div className="podium2">  </div>
        <div className="podium3"></div>
      </div>
    </main>
  );
}
