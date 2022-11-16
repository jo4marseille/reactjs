/* Import axios */
import axios from "axios";

/* Import de l'URL */
import { URL_PAYS } from "../Config/Config";

/**
 * Function findPays : GET tous les pays
 * return response axios : array
 */
function findPays(){
    return axios.get(`${URL_PAYS}?populate=*`)
}

/**
 * Function findAthletesPays : GET les athlètes d'un pays
 * PARAM : ID
 * return response axios : array
 */
 function findAthletesPays(id){
    return axios.get(`${URL_PAYS}/${id}?populate[athletes][populate]=*&populate=drapeau`)
}

/* Export des fonctions */
export default {
    findPays,
    findAthletesPays
}