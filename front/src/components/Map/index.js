/****************
* Map Component *
****************/

/*****************
* Map stylesheet *
*****************/
import './map.css';

/***********
* Packages *
***********/
import {
    useJsApiLoader,
    GoogleMap,
    DirectionsRenderer
} from "@react-google-maps/api";
import { useDispatch, useSelector } from 'react-redux';

/************
* Fake Data *
************/
import eventsLocation from '../../data/events';
import hotels from '../../data/hotels';

/**********
* Actions *
**********/
import {
    hydrateDestinationFrom,
    hydrateDestinationTo,
    hydrateDirectionResponse,
    clearResponse,
    searchPlaces,
} from '../../actions/map';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const mapCenter = {
    lat: 43.268178,
    lng: 5.384399
};

const Map = () => {
    const dispatch = useDispatch();

    const {
        destinationFrom,
        destinationTo,
        directionResponse,
    } = useSelector((state) => state.map);

    async function calculateRoute() {
        if (destinationFrom === null || destinationTo === null) {
            return;
        };
        // eslint-disable-next-line no-undef
        const directionsServices = new google.maps.DirectionsService();
        const results = await directionsServices.route({
            // eslint-disable-next-line no-undef
            origin: new google.maps.LatLng(destinationFrom.coordinates.lat, destinationFrom.coordinates.lng),
            // eslint-disable-next-line no-undef
            destination: new google.maps.LatLng(destinationTo.coordinates.lat, destinationTo.coordinates.lng),
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.WALKING
        });
        dispatch(hydrateDirectionResponse(results));
        dispatch(searchPlaces());
    };

    // const clearRoute

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

                <select
                    name="searchFrom"
                    id="searchFrom"
                    className="search__from search-input"
                    onChange={(evt) => {
                        if (directionResponse !== null) {
                            dispatch(clearResponse());
                        }
                        const selectedEvent = eventsLocation.find((item) => item.id === parseInt(evt.target.value));
                        dispatch(hydrateDestinationFrom(selectedEvent));
                    }}
                >
                    <option value="">Choisissez l'event</option>
                    {eventsLocation.map((item) => (
                        <option
                            value={item.id}
                        >
                            {item.name}
                        </option>
                    ))}
                </select>

                <select
                    name="searchTo"
                    id="searchTo"
                    className="search__to search-input"
                    onChange={(evt) => {
                        if (directionResponse !== null) {
                            dispatch(clearResponse());
                        }
                        const selectedHotel = hotels.find((item) => item.id === parseInt(evt.target.value));
                        dispatch(hydrateDestinationTo(selectedHotel));
                    }}
                >
                    <option value="">Choisissez vôtre hôtel</option>
                    {hotels.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                </select>

                <button
                    className="search__submit"
                    onClick={() => {
                        calculateRoute();
                    }}
                >
                    Rechercher
                </button>
            </div>

            <GoogleMap
                center={mapCenter}
                mapContainerStyle={containerStyle}
                zoom={13}
            >
                {directionResponse && <DirectionsRenderer directions={directionResponse} />}
            </GoogleMap>
        </div>
    );
};

export default Map;
