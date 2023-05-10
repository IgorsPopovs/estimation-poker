import axios from 'axios';
import {User} from "../types";

const BASE_URL = 'http://localhost:5000/api';

const api = {
    getUsers: () => axios.get(`${BASE_URL}/users`),
    createUser: (userName: string, userId: string) => axios.post(`${BASE_URL}/users`, {userName, userId}),
    updateUser: (id: number, user: User) => axios.put(`${BASE_URL}/users/${id}`, user),
    deleteUser: (id: number) => axios.delete(`${BASE_URL}/users/${id}`),
};

export default api;
