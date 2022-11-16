import React, { useState, useEffect } from 'react';
import data_info from '../data/info_jo.json'

const Anecdote = () => {
    const [data, setData] = useState(data_info[Math.floor(Math.random() * Object.keys(data_info).length)]);
    const [data2, setData2] = useState(data_info[Math.floor(Math.random() * Object.keys(data_info).length)])

    useEffect(() => {
        const interval = setInterval(() => {
            setData(data => data_info[Math.floor(Math.random() * Object.keys(data_info).length)]);
            setData2(data => data_info[Math.floor(Math.random() * Object.keys(data_info).length)]);


        }, 10000);
        return () => clearInterval(interval);
    }, []);



    return (
        <div style={{margin: "30px auto"}}>
            <div style={{display:'flex', alignItems:'center', margin:"15px auto"}}>
            <p style={{margin: "30px 20px", fontSize:"12px"}}>{ data.content }</p>
            <img style={{width: "100px", height: "100px", marginRight:"10px", objectFit:"cover", borderRadius:"8px"}} alt="image" src={data.image}/>
        </div>
            <div style={{display:'flex',alignItems:'center', margin:"15px auto"}}>
            <img style={{width: "100px", height: "100px", marginLeft:"10px", objectFit:"cover" , borderRadius:"8px"}} alt="image" src={data.image}/>
                <p style={{margin: "30px 20px", fontSize:"12px"}}>{ data2.content }</p>

            </div>

        </div>
    );
};

export default Anecdote;