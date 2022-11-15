/****************
* Map Component *
****************/

/*****************
* Map stylesheet *
*****************/
import './map.css';

import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '100%'
};

const mapCenter = {
    lat: 43.268178,
    lng: 5.384399
};

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    if (!isLoaded) {
        return (
            <div className="map-container">
                Map is loading...
            </div>
        )
    };

    return (
        <div className="map-container">
            <GoogleMap
                center={mapCenter}
                mapContainerStyle={containerStyle}
                zoom={13}
            >
            </GoogleMap>
        </div>
    );
};

export default Map;
