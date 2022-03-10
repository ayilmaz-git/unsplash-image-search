import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 3C6CrzHz2Z2WFk06UwDj0weoYlZcHgcbehKDG2AMSxE'
      }
});