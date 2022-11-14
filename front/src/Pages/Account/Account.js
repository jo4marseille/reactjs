import {useEffect, useState} from 'react';
import axios from 'axios'
import { URL_USER } from "../../Config/Config"

export async function getServerSideProps() {
    const res = await axios.get(URL_USER);

    return {
        props: {
            data: res.data
        }
    };
}

export default function Account(props) {

    const evens = props.data.data
    if(evens.length != 0){
        return (
            <main>
                <article>
                    <h3>Account</h3>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                    </form>
                </article> 
                <article>
                    <h3>Evens</h3>
                    <ul>
                        {evens.map((even, index) => (
                            console.log(even)
                            // <li key={even.id}>
                            //     <h4>{even.title}</h4>
                            //     <p>{even.description}</p>
                            //     <p>{even.date}</p>
                            //     <p>{even.sport}</p>
                            // </li>
                        ))}
                    </ul>
                </article>
            </main>
        )
    }
}