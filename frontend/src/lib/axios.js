import axios from "axios"


const api = axios.create({
    //baseURL : 'http://localhost:3000'
    baseURL : 'https://mern-bookstore-ylpr.onrender.com/books'
})



export default api;
