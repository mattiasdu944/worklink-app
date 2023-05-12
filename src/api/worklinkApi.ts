import axios from "axios";

const worklinkApi = axios.create({
    baseURL: 'https://la-salle-work-link.vercel.app/api'
})

export default worklinkApi;