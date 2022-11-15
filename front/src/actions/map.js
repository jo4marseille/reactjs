/**************
* Action Type *
**************/
export const HYDRATE_DESTINATION_FROM = 'HYDRATE_DESTINATION_FROM';
export const HYDRATE_DESTINATION_TO = 'HYDRATE_DESTINATION_TO';
export const HYDRATE_DIRECTION_RESPONSE = 'HYDRATE_DIRECTION_RESPONSE';
export const CLEAR_RESPONSE = 'CLEAR_RESPONSE';
export const SEARCH_PLACES = 'SEARCH_PLACES';

/******************
* Action Creators *
******************/
export const hydrateDestinationFrom = (eventSelected) => ({
    type: HYDRATE_DESTINATION_FROM,
    value: eventSelected,
});

export const hydrateDestinationTo = (destinationSelected) => ({
    type: HYDRATE_DESTINATION_TO,
    value: destinationSelected,
});

export const hydrateDirectionResponse = (response) =>({
    type: HYDRATE_DIRECTION_RESPONSE,
    value: response,
});

export const clearResponse = () => ({
    type: CLEAR_RESPONSE,
});

export const searchPlaces = () => ({
    type: SEARCH_PLACES,
})
