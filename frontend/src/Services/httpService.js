import logger from './logService';
import axios from 'axios';
import {
    toast
} from 'react-toastify';
import auth from './authService';




axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        logger.log(error);
        toast.error("An unexpected error occured.");
    }

    return Promise.reject(error);

});

// function setJwt(Jwt) {
//     axios.defaults.headers.common["x-auth-token"] = auth.getJwt();
// }

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    // setJwt
}