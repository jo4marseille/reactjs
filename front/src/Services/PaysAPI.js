/* Import axios */
import axios from "axios";

/* Import de l'URL */
import { URL_PAYS } from "../Config/Config";

function findEventPlayers(id_pays, id_event){
    return axios.get(`${URL_PAYS}/${id_pays}?populate[athletes][filters][evenement][id][$eq]=${id_event}&populate[athletes][populate]=photoAthlete`)
}

export default {
    findEventPlayers
} 