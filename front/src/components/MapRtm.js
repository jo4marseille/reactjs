import React, {useState, useEffect} from 'react';
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import TransportBackup from '../data/transport.json';
import InputChoice from './InputChoice';
import Legende from './Legende';
// import MyMarker from './Mymarker.js';

function MyMap() {
  const [viewport, setViewport] = useState({});
  const [stationsmetro, setStationsMetro] = useState([]);
  const [stationstramway, setStationsTramway] = useState([]);
  var [distance, setDistance] = useState(0);
  
  function GetDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    
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

  
  function calculCo2(a){
    var autototalCO2G =  a * 120;
    var bustotalCO2G = a* 30;
    var totalCO2reduit = autototalCO2G - bustotalCO2G;
    var total = totalCO2reduit/1000
    return total.toFixed(2);

  }
  function calculCo2Metro(km){
    return (km*0.027).toFixed(2)

  }
  function calculCo2Voiture(km){
    return (km*0.22).toFixed(2)

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
    //  let result = response.json();
      // if(response.status!==200){
        let result = TransportBackup;
         
      // }
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
      {viewport.latitude && viewport.longitude &&  (
        <div>
          <div style={{fontFamily: "'Poppins', sans-serif"}}>
            <p> Vous êtes à {distance} Km de votre point d'intérêt </p>
            <p>Cela représente <strong style={{color: '#00A651'}}>{calculCo2Metro(calculCo2(distance))} Kg CO2</strong> en métro contre <strong style={{color: '#ED354F'}}>{calculCo2Voiture(calculCo2(distance))} Kg CO2</strong> en voiture</p>
            <p>Et <strong style={{color: '#00A651'}}>0 Kg CO2</strong> à pied ou en vélo!</p>
          </div>
        <div style={{display: 'flex'}}>
          <Legende/>

          <Map
            mapboxAccessToken="pk.eyJ1IjoidGhvbWFzMzMiLCJhIjoiY2pzYWFpcXNwMDAxbzN5cGZneGxia3U3ZCJ9.sigYT2nlLnC1siycJ3im-Q"
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            style={{width: 600, height: 400}}

          >{/* Coordonnées des stations de tramway */}
            {stationstramway.map(transptramway => {
                return (
                <Marker
                onClick={(e) => {GetDistanceFromLatLonInKm(viewport.latitude, viewport.longitude, transptramway.latitude, transptramway.longitude); setDistance(distance); console.log("click")}
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
                    onClick={(e) => {GetDistanceFromLatLonInKm(viewport.latitude, viewport.longitude, transpmetro.latitude, transpmetro.longitude); setDistance(distance); console.log("click") }
                }
                    longitude={transpmetro.longitude}
                    latitude={transpmetro.latitude}
                    color='#00004D'
                    />
                
                )
            }) }
              
              {/* Coordonnées de Géoloc */}
            <Marker
            //  onClick={(e) => {console.log("click") }
            // }
            onClick={(e) => {GetDistanceFromLatLonInKm(viewport.latitude, viewport.longitude, viewport.latitude, viewport.longitude); setDistance(distance); console.log("click") }
            }
              longitude={viewport.longitude}
              latitude={viewport.latitude}
              color='#FDB408'
            />

            {/* Coordonnées du stade vélodrome */}
            <Marker
            onClick={(e) => {GetDistanceFromLatLonInKm(viewport.latitude, viewport.longitude, 43.27004, 5.39610); setDistance(distance); console.log("clickvélodrome")  }
            }
              longitude={5.39610}
              latitude={43.27004}
              color='#00A651'
            />

            {/* Coordonnées du stade nautique*/}
            <Marker
              onClick={(e) => {GetDistanceFromLatLonInKm(viewport.latitude, viewport.longitude, 43.26687, 5.37162); setDistance(distance); console.log("clickmarina")}
            }
              longitude={5.37162}
              latitude={43.26687}
              color='#0282C8'
            />
          </Map>
        </div>
          
          <InputChoice></InputChoice>
         
        </div>
      )}
    </div>
  );
}
export default MyMap;