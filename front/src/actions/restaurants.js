import { bindActionCreators } from "redux";

export const HYDRATE_RESTAURANTS = 'HYDRATE_RESTAURANTS';
export const HYDRATE_SELECTED_RESTAURANT = 'HYDRATE_SELECTED_RESTAURANT';
export const CLEAR_SELECTED_RESTAURANT = 'CLEAR_SELECTED_RESTAURANT';

export const hydrateRestaurants = (list) => ({
    type: HYDRATE_RESTAURANTS,
    list: list,
});

export const hydrateSelectedRestaurant = (selected) => ({
    type: HYDRATE_SELECTED_RESTAURANT,
    value: selected,
});

export const clearSelectedRestaurant = () => ({
    type: CLEAR_SELECTED_RESTAURANT
});
