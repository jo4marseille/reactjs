import axios from "axios";

import { SEARCH_PLACES } from "../actions/map";

const searchesMiddleware = (store) => (next) => (action) => {
    // switch (action.type) {
    //     case SEARCH_PLACES:
    //         const apiKey = process.env.REACT_APP_PLACES_API_KEY;
    //         console.log(apiKey);
    //         const lat = store.getState().map.destinationFrom.coordinates.lat;
    //         const lng = store.getState().map.destinationFrom.coordinates.lng;
    //         const radius = 1000;

    //         axios.get(
    //             // URL
    //             `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=[${apiKey}]&location=${lat},${lng}&radius=${radius}&type=restaurant`,
    //             { },
    //         )
    //             .then((response) => {
    //                 console.log(response);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //         break;
    
    //     default:
    //         break;
    // }

    next(action);
};

export default searchesMiddleware;
