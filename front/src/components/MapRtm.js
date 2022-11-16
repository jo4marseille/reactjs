import React, {useState, useEffect} from 'react'
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import TransportBackup from '../data/transport.json'
import InputChoice from './InputChoice'
// import MyMarker from './Mymarker.js';

function MyMap() {
  const [viewport, setViewport] = useState({});
  const [stationsmetro, setStationsMetro] = useState([]);
  const [stationstramway, setStationsTramway] = useState([]);
  
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    
    // Distance in km
    distance=(R * c).toFixed(2);
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }



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
      const transptramway = transports.filter(item => item.type=="Tramway")
      const transpmetro = transports.filter(item => item.type=="Métro")
      
      setStationsTramway(transptramway)
      setStationsMetro(transpmetro)
      
    })
  }, []);
  
  return (
    
    <div>
      {viewport.latitude && viewport.longitude && (
        <div>
          <h1>Your Location:</h1>
          <p>{getDistanceFromLatLonInKm(viewport.latitude, viewport.longitude, 43.2700457363978, 5.396101876703966)} Km du Velodrome </p>
          
          
<<<<<<< HEAD
=======
          <p> Vous êtes à {distance} Km de votre point d'intérêt </p>
          <p>Cela représente {calculCo2Metro(calculCo2(distance))} Kg CO2 en métro contre {calculCo2Voiture(calculCo2(distance))} Kg CO2 en voiture</p>
          <p>Et 0 Kg CO2 à pied ou en vélo!</p>

>>>>>>> 16387eb967b9f95835c2e65d35cf26e1161dae75
          <Map
            mapboxAccessToken="pk.eyJ1IjoidGhvbWFzMzMiLCJhIjoiY2pzYWFpcXNwMDAxbzN5cGZneGxia3U3ZCJ9.sigYT2nlLnC1siycJ3im-Q"
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            style={{width: 600, height: 400}}

          >{/* Coordonnées des stations de tramway */}
            {stationstramway.map(transptramway => {
                return (
                <Marker
                onClick={(e) => {let lati=transptramway.latitude; let longi=transptramway.longitude; }
            }
                    longitude={transptramway.longitude}
                    latitude={transptramway.latitude}
                    color='#FF5757'
                />
              
                )
            }) }
            {/* Coordonnées des stations de métro */}
            {stationsmetro.map(transpmetro => {
                return (
                    
                    <Marker
                    onClick={(e) => {let lati=transpmetro.latitude; let longi=transpmetro.longitude; console.log(lati, longi) }
                }
                    longitude={transpmetro.longitude}
                    latitude={transpmetro.latitude}
                    color='#00004D'
                    />
                
                )
            }) }
              
              {/* Coordonnées de Géoloc */}
            <Marker
             onClick={(e) => {let lati=viewport.latitude; let longi=viewport.longitude; console.log(lati, longi) }
            }
              longitude={viewport.longitude}
              latitude={viewport.latitude}
              color='#FDB408'
            />

            {/* Coordonnées du stade vélodrome */}
            <Marker
             onClick={(e) => {let lati=43.27004; let longi=5.39610; console.log(lati, longi) }
            }
              longitude={5.39610}
              latitude={43.27004}
              color='#00A651'
            />

            {/* Coordonnées du stade nautique*/}
            <Marker
              onClick={(e) => {let lati=43.26687; let longi=5.37162; console.log(lati, longi) }
            }
              longitude={5.37162}
              latitude={43.26687}
              color='#0282C8'
            />
          </Map>
          <InputChoice></InputChoice>
         
        </div>
      )}
    </div>
  );
}
export default MyMap;