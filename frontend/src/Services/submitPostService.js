import http from "./httpService";
const apiEndpoint = "http://localhost:3000/api/postWrite";

// http.setJwt(getJwt());

export async function submitPost(content) {
    console.log("inside the submit post function 1");
    const post = http.post(apiEndpoint, {
        content: content
    });
    console.log("inside the submit post function 2");
    return post;
}