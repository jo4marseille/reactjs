import React, {useState, useEffect} from 'react'
import Triselectif from '../data/triselectif.json'

function Tri() {

    const [data, setData] = useState({});

    useEffect(() => {

        const requestOptions = {
            method: 'GET',
        };
        fetch('https://data.ampmetropole.fr/api/records/1.0/search/?dataset=point-dapport-volontaire-mamp&q=&facet=flux_lib&facet=commune&facet=type_lib&facet=ct&facet=MARSEILLE&refine.commune=MARSEILLE', requestOptions)
            .then((response) => {
                let result = response.json;
                if(response.status!==200){
                    result = Triselectif;
                }
                console.log(response);
                
                let tris = []
                result.records.map((item) => {
                    tris.push({
                      "type" : item.fields.type_lib,
                      "nom"  : item.fields.flux_lib,
                      "latitude" : item.fields.geo_point_2d[0],
                      "longitude":item.fields.geo_point_2d[1]
                    })
                    
                })
                
                // setData(tris)
                console.log(tris);
                
            })
            
            

    }, [])


  return (
    <div>Tri</div>
    
  )
}

export default Tri