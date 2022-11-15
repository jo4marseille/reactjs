import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../views/Home";
import Agenda from "../views/Agenda";
import Loader from "../views/Loader";

const Rooter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/agenda" element={<Agenda/>}/>
                    <Route path="/loader" element={<Loader />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Rooter;
