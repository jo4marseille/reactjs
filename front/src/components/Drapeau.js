import Pays from '../components/Pays';
import { useState, useEffect } from 'react';
import './Drapeau.css'

export default function Drapeau() {

    //create a function for changing pages
    const [page, setPage] = useState(1);
    function changePage(page) {
        setPage(page);
        console.log(page);
    }


    const pays = [
        {
            nom: "Australia",
            langue: "English",
            image: <img className=" icon"
                src="flag/AU.svg" />,

        },
        {
            nom: "United Kingdom",
            langue: "English",
            image: <img className=" icon"
                src="flag/GB.svg" />,
        },
        {
            nom: "Brazils",
            langue: "Portuguese",
            image: <img className=" icon"
                src="flag/BR.svg" />,
        },
        {
            nom: "中国",
            langue: "Chinese",
            image: <img className=" icon"
                src="flag/CN.svg" />,
        },
        {
            nom: "الجزائر",
            langue: "Arab",
            image: <img className=" icon"
                src="flag/DZ.svg" />,
        },
        {
            nom: "مصر",
            langue: "Arab",
            image: <img className=" icon"
                src="flag/EG.svg" />,
        },
        {
            nom: "España",
            langue: "Spanish",
            image: <img className=" icon"
                src="flag/ES.svg" />,
        },
        {
            nom: "भारत",
            langue: "Hindi",
            image: <img className=" icon"
                src="flag/IN.svg" />,
        },
        {
            nom: "المملكة المغربية",
            langue: "Arab",
            image: <img className=" icon"
                src="flag/MA.svg" />,
        },
        {
            nom: "Portugal",
            langue: "Portuguese",
            image: <img className=" icon"
                src="flag/PT.svg" />,
        },
        {
            nom: "United States",
            langue: "English",
            image: <img className=" icon"
                src="flag/US.svg" />,
        }, {
            nom: "Россия",
            langue: "Russian",
            image: <img className=" icon"
                src="flag/RU.svg" />,
        },
        {
            nom: "México",
            langue: "Spanish",
            image: <img className=" icon"
                src="flag/MX.svg" />,
        },
        {
            nom: "في تونس",
            langue: "Arab",
            image: <img className=" icon"
                src="flag/TN.svg" />,
        },
        {
            nom: "Nigeria",
            langue: "English",
            image: <img className=" icon"
                src="flag/NG.svg" />,
        },

    ];

    return (
        <>
            <div className="container card" style={{marginTop :"20px", marginBottom : "20px" , paddingTop:"15px" , paddingBottom:"15px"}}>
                <div className="row">
                    {pays.map((item, key) => {
                        return (
                            <div className='col-4'>
                                <Pays key={key} item={item} numero={key} page={page} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='parenttt' style={{ display: "flex", flexDirection: "row" }}>
                <div className='enfant card' style={{ background: page == 1 && "grey" }} onClick={() => { changePage(1) }}>1</div>
                <div className='enfant card' style={{ background: page == 2 && "grey" }} onClick={() => { changePage(2) }}>2</div>
            </div>
        </>
    )
}