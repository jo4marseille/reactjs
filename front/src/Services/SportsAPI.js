/* Import axios */
import axios from "axios";

/* Import de l'URL */
import { URL_SPORTS } from "../Config/Config";

/**
 * Function findSports : GET tous les sports
 * return response axios : array
 */
function findSports(){
    return axios.get(`${URL_SPORTS}?populate=*`)
}

/* Export des fonctions */
export default {
    findSports
}