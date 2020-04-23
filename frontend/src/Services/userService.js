import http from "./httpService";
// import {
//     apiUrl
// } from "../config.json";

// const apiEndpoint = apiUrl + "/users";
const apiEndpoint = "http://localhost:3000/api/signup";

export function register(user) {
    http.post(apiEndpoint, {
        first_name: user.firstName,
        middle_name: user.middleName,
        last_name: user.lastName,
        email: user.email,
        mobile_number: user.mobileNumber,
        password: user.password
    })
}