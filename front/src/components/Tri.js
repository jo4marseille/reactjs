import React, {useState, useEffect} from 'react'

function Tri() {

    const [data, setData] = useState({});

    useEffect(() => {

        const requestOptions = {
            method: 'GET',
        };
        fetch('https://data.ampmetropole.fr/api/records/1.0/search/?dataset=point-dapport-volontaire-mamp&q=&facet=flux_lib&facet=commune&facet=type_lib&facet=ct&facet=MARSEILLE&refine.commune=MARSEILLE', requestOptions)
            .then((response) => {
                let result 
                console.log(response);
                
                
                let final = []
                response ((data) => {
                    final.push({
                      "type" : data.facet_group[0].facets[0].name,
                      "nom"  : data.facet_group[2].facets[0].name,
                      "latitude" : data.records[0].geometry.coordinates[0],
                      "longitude":data.records[0].geometry.coordinates[1]
                    }
                    )
                })
                // setData(final)
                console.log(final)

            })
            

    }, [data])


  return (
    <div>Tri</div>
    
  )
}

export default Tri