
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoicHJ5bWFudCIsImEiOiJjbGFoenE2NDQwM2Y5M3FsOWpvd3V1MW5oIn0.FFXlgFRbt_drMFhARB-5_Q';

function MapBio(props) {

    const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(props.lon);
const [lat, setLat] = useState(props.lat);
const [zoom, setZoom] = useState(props.zoom);
const style = {
height: '400px',
width: '400px'
  };

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
 
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));

        });
        });


  return (
    <div><div ref={mapContainer} className="map-container" style={style} /></div>
  )
}

export default MapBio