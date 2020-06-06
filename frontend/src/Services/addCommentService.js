import http from "./httpService";
const apiEndpoint = "http://localhost:3000/api/commentPost/";

// http.setJwt(getJwt());

export async function addComment(comment, id) {
    console.log("Inside comment service")
    const post = http.put(apiEndpoint + id, {
        content: comment
    });
    console.log("Comment service called");
    console.log(post)
    return post;
}