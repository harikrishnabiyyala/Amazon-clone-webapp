import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    // baseURL: 'http://127.0.0.1:5001/clone-efd24/us-central1/api'
    baseURL: 'https://us-central1-clone-efd24.cloudfunctions.net/api'
});

export default instance;