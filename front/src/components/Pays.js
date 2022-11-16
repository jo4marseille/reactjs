import React from 'react'
//import css for Pays
import './Pays.css'
import { Link } from 'react-router-dom';

export default function Pays(props) {
    const page = props.page;
    const numero = props.numero;
    const affichage = numero < page * 9 && numero >= (page - 1) * 9;

    /*function getTranslator(language)
    {
        //console.log(language);

        let history = useHistory();
        history.push("/list_translators");
    }*/

    const link = "/list_translators/" + props.item.langue;

    return (

        <div style={{ display: affichage ? "contents" : "none", textAlign: "center" }}>
            <div className="card cardPays" style={{ width: "90%", textAlign: "center" }}>
                <Link to={link}>
                    {props.item.image}
                </Link>
                < p className='haha'> Country : {props.item.nom}</p >
                <p>Language : {props.item.langue}</p>
            </div >
        </div >
    )
}