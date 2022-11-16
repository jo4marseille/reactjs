/********
* Store *
********/

import { configureStore } from "@reduxjs/toolkit"

import mapReducer from "../reducers/map";
import restaurantsReducer from "../reducers/restaurants";
import searchesMiddleware from "../middlewares/searchesMiddleware";

const rootReducer = {
    map: mapReducer,
    restaurants: restaurantsReducer,
};

const store = configureStore({
    reducer: rootReducer,
    middleware: [searchesMiddleware],
});

export default store;
