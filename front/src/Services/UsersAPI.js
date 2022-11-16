/* Import axios */
import axios from "axios";

/* Import de l'URL des users*/
import { URL_USER } from "../Config/Config";

/* Import de l'URL des votes*/
import { URL_VOTE } from "../Config/Config";

/**
 * Function findPays : GET tous les users avec leurs votes
 * return response axios : array
 */
function findUsers(id){
    return axios.get(`${URL_USER}/${id}?populate[votes][populate][athlete][populate]=*`)
}

/**
 * Function findPays : PUT tous les infos d'un user
 * return response axios : array
 */
function updateUser(id){
    return axios.put(`${URL_USER}/${id}`)
}

/**
 * Function findPays : DELETE un vote
 * return response axios : array
 */
 function deleteVote(id){
    return axios.put(`${URL_VOTE}/${id}`)
}

/* Export des fonctions */
export default {
    findUsers,
    updateUser,
    deleteVote
}