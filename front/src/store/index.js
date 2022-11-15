/********
* Store *
********/

import { configureStore } from "@reduxjs/toolkit"

import mapReducer from "../reducers/map";

const rootReducer = {
    map: mapReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
