/********
* Store *
********/

import { configureStore } from "@reduxjs/toolkit"

import mapReducer from "../reducers/map";
import searchesMiddleware from "../middlewares/searchesMiddleware";

const rootReducer = {
    map: mapReducer,
};

const store = configureStore({
    reducer: rootReducer,
    middleware: [searchesMiddleware],
});

export default store;
