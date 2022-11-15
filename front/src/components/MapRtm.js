import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import TransportBackup from '../data/transport.json'

function MyMap() {
  const [viewport, setViewport] = useState({});
  const [stations, setStations] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 14,
        
      });
    
    });
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
      setStations(transports)
    })
  }, []);
  
  return (
    
    <div>
      {viewport.latitude && viewport.longitude && (
        <div>
          <h1>Your Location:</h1>
          <Map
            mapboxAccessToken="pk.eyJ1IjoidGhvbWFzMzMiLCJhIjoiY2pzYWFpcXNwMDAxbzN5cGZneGxia3U3ZCJ9.sigYT2nlLnC1siycJ3im-Q"
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            style={{width: 600, height: 400}}
          >
            {stations.map(transport => {
                return (
                <Marker
                longitude={transport.longitude}
                latitude={transport.latitude}
              />
                )
            }) }
              
            <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
          </Map>
        </div>
      )}
    </div>
  );
}
export default MyMap;