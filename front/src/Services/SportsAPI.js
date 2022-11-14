import { URL_SPORTS } from "../Config/Config";
import axios from "axios";

function findSports(){
    return axios.get(`${URL_SPORTS}?populate=*`)
}


export default {
    findSports
}