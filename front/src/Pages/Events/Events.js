import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import evenementsAPI from '../../Services/EvenementsAPI'
import PaysAPI from '../../Services/PaysAPI';
import './Events.css'

import {AiOutlineFire} from 'react-icons/ai'

export default function Events() {

    const { pathname } = useLocation();
 
    const locationPath = pathname.split('/')

    const id = locationPath[2]

    const [event, setEvent] = useState([])

    const [currentselect, setCurrentSelect] = useState([])

    const [currentPaysAthletes, setCurrentPaysAthletes] = useState([])

    const [selectedPlayer, setSelectedPlayer] = useState([])

    const refreshData = async () => {
        try {
            const data = await evenementsAPI.findEvent(id).then(response => {
                setEvent(response.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getAthletePays =  (pays) => {
        try {
            const findAthletes = PaysAPI.findEventPlayers(pays.id, id).then(response => {
                console.log(response)
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

    const handlePlayerVote = (joueur) => {
        console.log(joueur)
    }

    console.log(selectedPlayer)

    useEffect(() => {
        refreshData()
    }, [])


    return (
        <section className='sectionEvents'>

            {
                event.attributes ? 
                    <>
                    <article>
                        <div className='headerImageEvents'>
                            <img src={`http://localhost:1337${event.attributes.image.data.attributes.url}`} />
                        </div>
                        <div>
                            <h4>
                            {
                                event.attributes.pays.data.map((item, index) => {
                                    
                                    if (index === 0){
                                        return (
                                            <>
                                                <img key={index} src={`http://localhost:1337${item.attributes.drapeau.data.attributes.url}`}/>
                                                {"  " + item.attributes.nom + " / "} 
                                            </>
                                        )
                                    }
                                        
                                    else {
                                        return (
                                            <>
                                                {item.attributes.nom + "  "}
                                                <img key={index} src={`http://localhost:1337${item.attributes.drapeau.data.attributes.url}`}/>
                                            </>
                                        )
                                    }
                                    
                                })
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
                                                <img key={index} src={`http://localhost:1337${item.attributes.drapeau.data.attributes.url}`}/>
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
                                                currentPaysAthletes.map((item, index) => {
                                                    return (
                                                        <li key={index} onClick={() => getSelectPlayer(item)}>
                                                            <div>
                                                                <img src={`http://localhost:1337${item.attributes.photoAthlete.data.attributes.url}`}/>
                                                            </div>
                                                            <div>
                                                                <p>{item.attributes.prenom + " " + item.attributes.nom}</p>
                                                                <AiOutlineFire onClick={() => {handlePlayerVote(item)}}/>
                                                            </div>
                                                            
                                                        </li>
                                                    )
                                                    
                                                })
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
