import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import SportsAPI from '../../Services/SportsAPI';
import moment from 'moment'
import "./SportEvents.css"

export default function SportEvents() {

    const { pathname } = useLocation();
 
    const locationPath = pathname.split('/')

    const id = locationPath[2]

    const [evenements, setEvenements] = useState([])

    const [sportName, setSportName] = useState("")

    const refreshData = async () => {
        try {
            const data = await SportsAPI.findOneSport(id).then(response => {
                setEvenements(response.data.data.attributes.evenements.data)
                setSportName(response.data.data.attributes)
                console.log(response.data.data.attributes)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        refreshData()
    }, [])


    console.log(sportName)
    return (
        <main className='sportEventsContainer'>
            <article>
                <section>
                    {
                        sportName ? 
                            <>
                            <div>
                                <img  src={`https://c-14-api.jo4marseille.fr${sportName.SportIcon.data.attributes.url}`}/>
                            </div>
                            <h3> {sportName.nom}</h3>
                            </>
                        :

                        <></>
                    }
                    
                </section>
                
                <ul>
                    {
                        evenements.map((item, index) => {
                            console.log(item)
                            return (
                                <a href={`/event/${item.id}`}>
                                    <li key={index}>
                                        <div>
                                            <p>{moment(item.attributes.date_debut).utcOffset(60).format('MMM Do YYYY')}</p>
                                            <p>{moment(item.attributes.date_debut).utcOffset(60).format('HH:mm')}h</p>
                                        </div>
                                        <div>
                                            <p>
                                                {
                                                    item.attributes.pays.data.length === 2 ?
                                                    item.attributes.pays.data.map((item, index) => {
                                                        
                                                        if (index === 0){
                                                            return (
                                                                <>
                                                                    <img src={`https://c-14-api.jo4marseille.fr${item.attributes.drapeau.data.attributes.url}`}/>
                                                                    {" " + item.attributes.nom + " / "} 
                                                                </>
                                                            )
                                                        } else {
                                                            return (
                                                                <>
                                                                    {item.attributes.nom + " "}
                                                                    <img src={`https://c-14-api.jo4marseille.fr${item.attributes.drapeau.data.attributes.url}`}/>
                                                                </>
                                                            )
                                                        }
                                                        
                                                    })
                                                    :
                                                    <b>{item.attributes.nom}</b>
                                                }
                                            </p>
                                            
                                        </div>
                                        <div>
                                            <p>{item.attributes.localisation}</p>
                                        </div>
                                        <div>
                                            <BsArrowRightCircle/>
                                        </div>
                                        
                                        
                                        
                                    </li>
                                </a>
                            )
                        })
                    }
                </ul>
            </article>
        </main>
    )
}
