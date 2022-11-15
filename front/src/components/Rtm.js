import React, {useState, useEffect} from 'react'
import TransportBackup from '../data/transport.json'

function Rtm() {

    const [data, setData] = useState({});

//Use Effect sert a raffraichir en permanance les données de l'API
    useEffect(() => {

        const requestOptions = {
            method: 'GET',
        };
       
        fetch('https://data.ampmetropole.fr/api/records/1.0/search/?dataset=ls-stations-de-metro-et-de-tramway-marseille&lang=fr&facet=arret&facet=mode_de_transport&timezone=Europe%2FParis', requestOptions)
        .then((response) => {
         let result = response.json();
          if(response.status!==200){
             result = TransportBackup;
             
          }
          let transports=[];
          
          result.records.map((item) => {
              transports.push({
                'type': item.fields.mode_de_transport,
                "nom"  : item.fields.arret,
                "latitude" : item.fields.point_geo[0],
                "longitude": item.fields.point_geo[1]                
                });
          });
          setData(transports)
          
       });
        
    }, []) //si on met rien à la place de data ne recharge pas 


  return (
    <div>RTM</div>

  )
}

export default Rtm