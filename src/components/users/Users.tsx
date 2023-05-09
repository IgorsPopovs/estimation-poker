import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../api/api";
import io from 'socket.io-client';

interface User {
    id: number;
    name: string;
    email: string;
}

const Users = () => {

    const [users, setUsers] = useState<User[]>([]);
    const socket = io('http://localhost:5000'); // replace with your server URL

    useEffect(() => {

        // Listen for 'userListUpdate' event from server and update userList state
        socket.on('userListUpdate', ( {userList}) => {
            setUsers(userList);
            console.log(userList);
            console.log("Users updated");
        });
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Id: {user.id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
