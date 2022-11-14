import { URL_LOGIN } from "../Config/Config";
import axios from "axios";

function login(email, password) {
    return axios.post(URL_LOGIN, {email:email, password:password})
}


export default {
    login
}