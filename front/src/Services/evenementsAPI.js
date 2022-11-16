/* Import axios */
import axios from "axios";

/* Import de l'URL */
import { URL_EVENEMENTS } from "../Config/Config";

function findEvent(id){
    return axios.get(`${URL_EVENEMENTS}/${id}?populate[pays][populate]=drapeau&populate=image`)
}

function findEventPlayers(id_event, id_pays){
    return axios.get(`${URL_EVENEMENTS}/${id_event}?populate[pays][filters][id][$eq]=${id_pays}&populate=athletes`)
}

function findEventVotes(id_event, id_user){
    return axios.get(`${URL_EVENEMENTS}/${id_event}?populate[votes][filters][users_permissions_user][id][$eq]=${id_user}`)
}

export default {
    findEvent,
    findEventPlayers,
    findEventVotes,
} 