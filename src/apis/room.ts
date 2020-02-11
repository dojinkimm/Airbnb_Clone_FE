import {mainAxios} from 'src/libs/axios';

export const createRoom = (formData: FormData) =>
mainAxios.post('http://localhost:8080/room/upload-room', formData).catch(e=>console.log(e));