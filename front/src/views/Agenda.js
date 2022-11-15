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

import "./Agenda.css"
function Agenda() {

    let [filterList, setFilterList] = useState([])


    return (

        <div className="div_ctn_agenda">
            <FilterBar filterList={filterList} setFilterList={setFilterList}/>





            <VerticalContainer/>


        </div>
    )
}

export default Agenda;
