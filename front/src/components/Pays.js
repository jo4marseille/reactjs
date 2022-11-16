import React from 'react'
//import css for Pays
import './Pays.css'

export default function Pays(props) {
    const page = props.page;
    const numero = props.numero;
    const affichage = numero < page * 9 && numero >= (page - 1) * 9;

    return (

        <div style={{ display: affichage ? "contents" : "none", textAlign: "center" }}>
            <div className="card cardPays" style={{ width: "90%", textAlign: "center" }}>
            <a href="/list_translators">{props.item.image}</a>
                < p className='haha'> Pays : {props.item.nom}</p >
                <p>Langue : {props.item.langue}</p>
            </div >
        </div >
    )
}