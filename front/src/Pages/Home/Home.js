/* Import ReactJs */
import React, { useEffect, useState } from 'react'

/* Import Fonctions API  */
import SportsAPI from '../../Services/SportsAPI.js'

/* Import style */
import './Home.css'

export default function Home() {

    /*HOOKS : Liste des différents sport */
    const [sports, setSports] = useState([])

    /**
     * Function RefreshData : GET tous les sports en BDD 
     * return array : sports
     */
    const refreshData = async () => {
        try {
            const data = SportsAPI.findSports().then(response => {
                setSports(response.data.data)
            })
        } catch (error) {
            console.log(error)
        }    
    }

    useEffect(() => {
        refreshData()
    } ,[])

    return (
        <main>
            <article>
                <h3>Tous nos sports</h3>
                <ul>
                    {
                        sports.map((item, index) => {
                            
                            return (
                                <li key={item.attributes.nom}>
                                    <p>{item.attributes.nom}</p>
                                    <div>
                                      <img src={`http://localhost:1337${item.attributes.SportIcon.data.attributes.url}`} />   
                                    </div>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </article>
        </main>

    )
}
