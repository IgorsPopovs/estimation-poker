import io from "socket.io-client";

export const BASE_URL = 'https://estimation-poker.herokuapp.com';//'http://localhost:5000';

export const BASE_API_URL = BASE_URL + '/api';

export const socket = io(BASE_URL); // replace with your server URL
