import { URL_LOGIN, URL_REGISTER } from "../Config/Config";
import axios from "axios";

function login(email, password) {
    return axios.post(URL_LOGIN, { identifier: email, password: password })
}

function register(username, email, password) {
    return axios.post(URL_REGISTER, { username: username, email: email, password: password })
}


export default {
    login,
    register
}