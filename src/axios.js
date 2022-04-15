import axios from "axios";
const instance = axios.create({
    baseURL:"..."//the api
});
export default instance;