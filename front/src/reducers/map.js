import {
    HYDRATE_DESTINATION_FROM,
    HYDRATE_DESTINATION_TO,
    HYDRATE_DIRECTION_RESPONSE,
    CLEAR_RESPONSE,
} from "../actions/map";

const initialState = {
    destinationFrom: null,
    destinationTo: null,
    directionResponse: null,
};

const mapReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case HYDRATE_DESTINATION_FROM:
            return {
                ...state,
                destinationFrom: action.value,
            };

        case HYDRATE_DESTINATION_TO:
            return {
                ...state,
                destinationTo: action.value,
            };

        case HYDRATE_DIRECTION_RESPONSE:
            return {
                ...state,
                directionResponse: action.value,
            };

        case CLEAR_RESPONSE:
            return {
                ...state,
                directionResponse: null,
            };

        default:
            return state;
    }
};

export default mapReducer;
