import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;

export const mainAxios = axios.create({
    baseURL: `http://localhost:8080`,
    withCredentials: true,
  });
  