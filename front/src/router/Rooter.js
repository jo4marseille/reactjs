import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../views/Home";
import Agenda from "../views/Agenda";

const Rooter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/agenda" element={<Agenda/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Rooter;
