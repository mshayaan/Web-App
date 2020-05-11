import http from "./httpService";
const apiEndpoint = "http://localhost:3000/api/getUsers";

// http.setJwt(getJwt());

export async function getUsers() {
    const ret = await http.get(apiEndpoint);
    return ret;
}