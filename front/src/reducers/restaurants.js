import { HYDRATE_RESTAURANTS, HYDRATE_SELECTED_RESTAURANT, CLEAR_SELECTED_RESTAURANT } from "../actions/restaurants";

const initialState = {
    restaurants: null,
    selectedRestaurant: null,
};

const restaurantsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case HYDRATE_RESTAURANTS:
            return {
                ...state,
                restaurants: action.list
            }

        case HYDRATE_SELECTED_RESTAURANT:
            return {
                ...state,
                selectedRestaurant: action.value
            }

        case CLEAR_SELECTED_RESTAURANT:
            return {
                ...state,
                selectedRestaurant: null
            }
    
        default:
            return state
    }
};

export default restaurantsReducer;
