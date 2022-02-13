import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://insta-clone01.herokuapp.com/'
})

export default instance;
