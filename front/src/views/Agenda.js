import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import FilterBar from "../components/agenda/FilterBar";
import {useState} from "react";
import VerticalContainer from "../components/agenda/VerticalContainer";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import "./Agenda.css"
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

function Agenda() {

    let [filterList, setFilterList] = useState([])


    return (
        <div>

            <Header/>

            <div style={{
                width: "100vw",
                height: 120,
                marginTop: 80,
                display: "grid",
                gridTemplateColumns: "1fr 1.5fr 1fr",
                backgroundColor: "#FFFFFF",
                borderBottom: "1px solid #707070"
            }}>

                <div style={{
                    textAlign: "center",
                    color: "#707070",
                    fontSize: 16,
                    height: 120,
                    paddingTop: 35,
                    marginLeft: "2em",
                    cursor: "pointer"

                }}
                     className={"item_hover"}
                >
                    <span style={{fontSize: 20, lineHeight: 1.5}}>Jour 4</span>
                    <br/>
                    02/08
                </div>


                <div style={{
                    textAlign: "center",
                    color: "#FF5757",
                    fontSize: 26,
                    height: 120,
                    paddingTop: 20,
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
                     className={"item_hover"}>
                    <span style={{fontSize: 30, lineHeight: 1.5}}> Jour 5</span>
                    <br/>
                    03/08
                </div>


                <div style={{
                    textAlign: "center",
                    color: "#707070",
                    fontSize: 16,
                    height: 120,
                    paddingTop: 35,
                    marginRight: "2em",
                    cursor: "pointer"
                }}
                     className={"item_hover"}>
                    <span style={{fontSize: 20, lineHeight: 1.5}}>Jour 6</span>
                    <br/>
                    04/08
                </div>


            </div>

            <ChevronRightIcon style={{
                position: "absolute",
                top: 118,
                right: -12,
                fontSize: 50,
                color: "#707070"
            }}/>

            <ChevronLeftIcon style={{
                position: "absolute",
                top: 118,
                left: -12,
                fontSize: 50,
                color: "#707070"
            }}/>
            <div className="div_ctn_agenda">


                <FilterBar filterList={filterList} setFilterList={setFilterList}/>


                <VerticalContainer/>

            </div>

            <Footer/>
        </div>
    )
}

export default Agenda;
