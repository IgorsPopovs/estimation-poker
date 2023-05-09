import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../api/api";

interface User {
    id: number;
    name: string;
    email: string;
}

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        api.getUsers()
            .then((response) => {
                console.log(response.data.userList)
                setUsers(response.data.userList);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
