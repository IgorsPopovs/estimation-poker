import axios from 'axios';
import {User} from "../types";
import {BASE_API_URL} from "../constants/constants";

const api = {
    getUsers: () => axios.get(`${BASE_API_URL}/users`),
    createUser: (userName: string, userId: string) => axios.post(`${BASE_API_URL}/users`, {userName, userId}),
    updateUser: (id: number, user: User) => axios.put(`${BASE_API_URL}/users/${id}`, user),
    deleteUser: (id: number) => axios.delete(`${BASE_API_URL}/users/${id}`),
};

export default api;
