import React, {useState, useEffect} from 'react'

function Bio() {

    const [data, setData] = useState({});

    useEffect(() => {

        const requestOptions = {
            method: 'GET',
        };
        fetch('https://opendata.agencebio.org/api/gouv/operateurs/?activite=Restauration&lat=43.296482&lng=5.36978', requestOptions)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                

            })

    }, [])


  return (
    <div>Bio</div>
  )
}

export default Bio