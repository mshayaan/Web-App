import http from "./httpService";
// import {
//     apiUrl
// } from "../config.json";

// const apiEndpoint = apiUrl + "/users";
const apiEndpoint = "http://localhost:3000/api/auth";

export function login(email, password) {
    return http.post(apiEndpoint, {
        email,
        password
    });
}