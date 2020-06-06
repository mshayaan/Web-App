import http from "./httpService";
const apiEndpoint = "http://localhost:3000/api/getPosts";

// http.setJwt(getJwt());

export async function getPosts() {
    const ret = await http.get(apiEndpoint);
    return ret;
}