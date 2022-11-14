import React, {useState, useEffect} from 'react'

function Bio() {

    const [data, setData] = useState({});

    useEffect(() => {

        const requestOptions = {
            method: 'GET',
        };
        fetch('https://discord.com/api/oauth2/token', requestOptions)
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