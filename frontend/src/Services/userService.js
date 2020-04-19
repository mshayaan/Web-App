import http from "./httpService";
import {
    apiUrl
} from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
    http.post(apiEndpoint, {
        first_name: user.first_name,
        middle_name: user.middle_name,
        last_name: user.last_name,
        email: user.email,
        mobile_number: user.mobile_number,
        password: user.password
    })
}