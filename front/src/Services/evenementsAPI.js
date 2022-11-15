/* Import axios */
import axios from "axios";

/* Import de l'URL */
import { URL_EVENEMENTS } from "../Config/Config";

function findEvent(id){
    return axios.get(`${URL_EVENEMENTS}/${id}?populate[pays][populate]=drapeau&populate=image`)
}

export default {
    findEvent
} 