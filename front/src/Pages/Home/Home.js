import React, { useEffect, useState } from 'react'
import SportsAPI from '../../Services/SportsAPI.js'
import './Home.css'

export default function Home() {

    const [sports, setSports] = useState([])

    const refreshData = async () => {
        const data = SportsAPI.findSports().then(response => {
            setSports(response.data.data)
        })
        console.log(data)
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
                                <li>
                                    <p>{item.attributes.nom}</p>
                                    <img src={item.attributes.icon} />
                                </li>
                            )
                        })
                    }
                </ul>
            </article>
        </main>

    )
}
