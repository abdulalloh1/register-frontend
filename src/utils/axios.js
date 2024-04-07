import axios from "axios";

const baseURL = 'http://localhost:8800/api';

const appAxios = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default appAxios;
