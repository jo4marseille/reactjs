
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoicHJ5bWFudCIsImEiOiJjbGFoenE2NDQwM2Y5M3FsOWpvd3V1MW5oIn0.FFXlgFRbt_drMFhARB-5_Q';

function MapBio(props) {

  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [zoom, setZoom] = useState(null);
  const style = {
    height: '400px',
    width: '400px'
  };

  useEffect(() => {
    if (!map) {

      setMap(new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [props.lng, props.lat],
        zoom: zoom
      }));
    } else {
      map.jumpTo({
        center: [props.lng, props.lat],
        zoom: props.zoom
      })
      const marker = new mapboxgl.Marker()
.setLngLat([props.lng, props.lat])
.addTo(map);
    }
  }, [props, map]);

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));

  //   });
  // });


  return (
    <div><div ref={mapContainer} className="map-container" style={style} /></div>
  )
}

export default MapBio