import Raven from "raven-js"

function init() {

}

function log(error) {
    Raven.captureException(error);
}

export default {
    init,
    log
};