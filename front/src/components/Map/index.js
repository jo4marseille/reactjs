/****************
* Map Component *
****************/

/*****************
* Map stylesheet *
*****************/
import './map.css';

import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

import eventsLocation from '../../data/events';
import hotels from '../../data/hotels';

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
            <div className="search">
                <select name="searchFrom" id="searchFrom" className="search__from search-input">
                    <option value="">Choisissez l'event</option>
                    {eventsLocation.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                </select>
                <select name="searchTo" id="searchTo" className="search__to search-input">
                    <option value="">Choisissez vôtre hôtel</option>
                    {hotels.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                </select>
                <button className="search__submit">Rechercher</button>
            </div>
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
