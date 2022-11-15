import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import evenementsAPI from '../../Services/evenementsAPI'
import './Events.css'

export default function Events() {

    const { pathname } = useLocation();
 
    const locationPath = pathname.split('/')

    const id = locationPath[2]

    const [event, setEvent] = useState([])

    const refreshData = async () => {
        try {
            const data = await evenementsAPI.findEvent(id).then(response => {
                setEvent(response.data.data)
            })
            data.then(
                
            )
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(event)

    const getAthletePays = (pays) => {
        console.log(pays)
    }

    useEffect(() => {
        refreshData()
    }, [])

    return (
        <section className='sectionEvents'>

            {
                event.attributes ? 
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
                            <h5>Les pays participants</h5>
                            <ul>
                                {
                                    event.attributes.pays.data.map((item, index) => {
                                        console.log(item)
                                        return (
                                            <li key={item.attributes.nom} value={item.attributes.nom} onClick={() => getAthletePays(item)}>
                                                <p>{item.attributes.nom}</p>
                                                <img key={index} src={`http://localhost:1337${item.attributes.drapeau.data.attributes.url}`}/>
                                            </li>
                                        )
                                    })
                                } 
                            </ul>
                            
                        </div>
                    </article>
                :
                <></>
            }
        </section>
    )
}
