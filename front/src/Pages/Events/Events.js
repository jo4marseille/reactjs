import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import evenementsAPI from '../../Services/EvenementsAPI'
import PaysAPI from '../../Services/PaysAPI';
import VoteAPI from '../../Services/VoteAPI';
import './Events.css'

import {AiOutlineFire} from 'react-icons/ai'
import {AiFillFire} from 'react-icons/ai'


export default function Events() {

    const { pathname } = useLocation();
 
    const locationPath = pathname.split('/')

    const id = locationPath[2]

    const id_user = window.localStorage.getItem('userId')

    const [event, setEvent] = useState([])

    const [currentselect, setCurrentSelect] = useState([])

    const [currentPaysAthletes, setCurrentPaysAthletes] = useState([])

    const [selectedPlayer, setSelectedPlayer] = useState([])

    const [votedPlayer, setVotedPlayer] = useState(0)


    const refreshData = async () => {
        try {
            const data = await evenementsAPI.findEvent(id).then(response => {
                setEvent(response.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const findVotedPlayer = () => {
        try {
            const data = VoteAPI.findExistVote(id, id_user).then(response => {
                setVotedPlayer(response.data.data[0].attributes.athlete.data.id)
                console.log(response)
            })
        } catch (error) {
            
        }
    }

    const getAthletePays = (pays) => {
        try {
            const findAthletes = PaysAPI.findEventPlayers(pays.id, id).then(response => {
                setCurrentPaysAthletes(response.data.data.attributes.athletes.data)
            })
        } catch (error) {

        }
    }

    const getSelectPays = (pays) => {
        setCurrentSelect(pays)
    }

    const getSelectPlayer = (joueur) => {
        setSelectedPlayer(joueur)
    }

    console.log(votedPlayer)

    const handlePlayerVote = async (joueur) => {
        try {
            const data = await evenementsAPI.findEventVotes(id, id_user).then(response => {
                console.log(response.data.data.attributes.votes.data)
                if (response.data.data.attributes.votes.data.length > 0){
                    let id_vote = response.data.data.attributes.votes.data[0].id
                    console.log("L'utilisateur a déjà voté sur cet évenement");
                    const getExistVote = VoteAPI.findOneVote(response.data.data.attributes.votes.data[0].id).then(response => {
                        console.log(response.data.data.attributes);
                        if (joueur.id === response.data.data.attributes.athlete.data.id){
                            console.log("Il a voté pour ce joueur")
                            const deleteVote = VoteAPI.deleteUserVote(id_vote).then(response => {
                                console.log(response.data.data.attributes.athlete.data.id);
                                setVotedPlayer(0)
                            })
                        } else {
                            console.log("il n'a pas voté pour ce joueur");
                            const updateVote = VoteAPI.updateUserVote(id_vote, joueur.id).then(response => {
                                console.log(response.data.data.attributes.athlete.data.id);
                                setVotedPlayer(response.data.data.attributes.athlete.data.id)
                            })
                        }
                    })
                } else {
                    console.log("l'utilisateur vote la prémire fois sur l'event");
                    const postVote = VoteAPI.postVote(joueur.id, id_user, id).then(response => {
                        console.log(response.data.data.attributes.athlete.data.id);
                        setVotedPlayer(response.data.data.attributes.athlete.data.id)
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
       
    }
   
    useEffect(() => {
        refreshData()
        findVotedPlayer()
    }, [])


    return (
        <section className='sectionEvents'>

            {
                event.attributes ? 
                    <>
                    <article>
                        <div className='headerImageEvents'>
                            <img src={`https://c-14-api.jo4marseille.fr${event.attributes.image.data.attributes.url ? event.attributes.image.data.attributes.url : ""}`} />
                        </div>
                        <div>
                            <h4>
                            {
                                event.attributes.pays.data.length === 2 ? 
                                event.attributes.pays.data.map((item, index) => {
                                    
                                    if (index === 0){
                                        return (
                                            <>
                                                <img key={index} src={`https://c-14-api.jo4marseille.fr${item.attributes.drapeau.data.attributes.url}`}/>
                                                {"  " + item.attributes.nom + " / "} 
                                            </>
                                        )
                                    }
                                        
                                    else {
                                        return (
                                            <>
                                                {item.attributes.nom + "  "}
                                                <img key={index} src={`https://c-14-api.jo4marseille.fr${item.attributes.drapeau.data.attributes.url}`}/>
                                            </>
                                        )
                                    }
                                    
                                })
                                :
                                event.attributes.nom
                            }                       
                            </h4>
                            <p>{event.attributes.localisation}</p>
                            <p>{moment(event.attributes.date_debut).utcOffset(60).format('MMM Do YYYY')}</p>
                            <p>{moment(event.attributes.date_debut).utcOffset(60).format('HH:mm')}h</p>
                        </div>
                        <div>
                            <ul className='listPaysEvent'>
                                {
                                    event.attributes.pays.data.map((item, index) => {
                                        return (
                                            <li 
                                                key={item.attributes.nom} 
                                                value={item.attributes.nom} 
                                                onClick={() => (getAthletePays(item), getSelectPays(item))}
                                                style={{background: item.id === currentselect.id ? "#fb8500" : ""}}
                                            >
                                                <p>{item.attributes.nom}</p>
                                                <img key={index} src={`https://c-14-api.jo4marseille.fr${item.attributes.drapeau.data.attributes.url}`}/>
                                            </li>
                                        )
                                    })
                                } 
                            </ul>
                        </div>
                        <div className='currentPaysPlayer'>
                        {
                            currentPaysAthletes.length > 0 ?
                                <>
                                    <h5>Athlètes</h5>
                                    <ul className='listJoueursPaysEvent'>
                                        
                                        {
                                            currentPaysAthletes ?
                                            currentPaysAthletes.map((item, index) => {
                                                console.log(votedPlayer, item)
                                                return (
                                                    <li key={index} onClick={() => getSelectPlayer(item)}>
                                                        <div>
                                                            <img src={`https://c-14-api.jo4marseille.fr${item.attributes.photoAthlete.data.attributes.url}`}/>
                                                        </div>
                                                        <div>
                                                            <p>{item.attributes.prenom + " " + item.attributes.nom}</p>
                                                            {
                                                                item.id === votedPlayer ? 
                                                                    <AiFillFire style={{color: "#fb8500"}} onClick={() => {handlePlayerVote(item)}}/>
                                                                :
                                                                    <AiOutlineFire onClick={() => {handlePlayerVote(item)}}/>
                                                            }
                                                           
                                                        </div>
                                                        
                                                    </li>
                                                )
                                                
                                            })
                                            :
                                            <></>
                                        }
                                        
                                    </ul>
                                </>
                            :

                            <></>
                        }
                            
                        </div>
                       
                    </article>
                    </>
                :
                <></>
            }
        </section>
    )
}
