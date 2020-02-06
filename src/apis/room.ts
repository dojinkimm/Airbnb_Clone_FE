import axios from 'axios';


export const createRoom = (formData: FormData) =>
  axios.post('http://localhost:8080/upload-room', formData, {
    headers: {
      // 'Content-Type': 'multipart/form-data',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // Accept: 'application/json',
    },
  }).catch(e=>console.log(e));