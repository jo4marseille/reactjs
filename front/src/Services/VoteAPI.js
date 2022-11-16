/* Import axios */
import axios from "axios";

/* Import de l'URL */
import { URL_VOTE } from "../Config/Config";

function postVote(id_athlete, id_user, id_event){
    return axios.post(`${URL_VOTE}?populate=athlete`, { data:{athlete: id_athlete ,users_permissions_user: id_user, evenement: id_event}})
}

function findOneVote(id_vote){
    return axios.get(`${URL_VOTE}/${id_vote}?populate=*`)
}

function deleteUserVote(id_vote){
    return axios.delete(`${URL_VOTE}/${id_vote}?populate=athlete`)
}

function updateUserVote(id_vote, id_athlete){
    return axios.put(`${URL_VOTE}/${id_vote}?populate=athlete`, {data: {athlete: id_athlete}})
}

function findExistVote(id_event, id_user){
    return axios.get(`${URL_VOTE}?populate=athlete&filters[evenement][id][$eq]=${id_event}&filters[users_permissions_user][id][$eq]=${id_user}`)
}

export default {
    postVote,
    findOneVote,
    deleteUserVote,
    updateUserVote,
    findExistVote
}