import React, {useState, useEffect} from "react";
import {socket} from "../../constants/constants";
import JoinButton from "./JoinButton";
import {UserProps} from "../../stores/UserStore";


const Users = () => {

    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        // Listen for 'userListUpdate' event from server and update userList state
        socket.on('userListUpdate', ({userList}) => {
            setUsers(userList);
            console.log(userList);
            console.log("Users updated");
        });
    }, []);


    const isJoinDisabled = () => {
        return false;
    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.filter(user => user.connected).map(user => (
                    <li key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Id: {user.id}</p>
                        <p>connected: {user.connected ? 'yes' : 'no'}</p>
                    </li>
                ))}
            </ul>
            {isJoinDisabled() ? '' :
                <JoinButton/>
            }

        </div>
    );
};

export default Users;
