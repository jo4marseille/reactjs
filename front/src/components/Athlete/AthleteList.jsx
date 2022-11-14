import React from "react";
const data = [
    {
        "name": "dedfd",
        "about": "jhfebkjhfbk",
    },
    {
        "name": "ddd",
        "about": "jhfebkjhfbk",
    },
    {
        "name": "ggg",
        "about": "jhfebkjhfbk",
    },
    {
        "name": "hhh",
        "about": "jhfebkjhfbk",
    },
    {
        "name": "qqqq",
        "about": "jhfebkjhfbk",
    },
]
const AthleteList =(props)=> {
    return(<div>
        {data.map(v => (
        <h1 onClick={() => props.setDataSponsor(v)}>
            {v.name}
        </h1>))}
    </div>)
}

export default AthleteList;