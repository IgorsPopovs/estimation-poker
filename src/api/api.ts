import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

const api = {
    getUsers: () => axios.get(`${BASE_URL}/users`),
    createUser: (user: any) => axios.post(`${BASE_URL}/users`, user),
    updateUser: (id: any, user: any) => axios.put(`${BASE_URL}/users/${id}`, user),
    deleteUser: (id: any) => axios.delete(`${BASE_URL}/users/${id}`),
};

export default api;
