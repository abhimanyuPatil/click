import axios from 'axios';
const url = '3.16.105.232'
export const HTTP = axios.create({
    baseURL: `http://${url}:3001/api/`,
    //   headers: {
    //     Authorization: 'Bearer {token}'
    //   }
})