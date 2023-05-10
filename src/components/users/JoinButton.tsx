import {useContext, useEffect, useState} from "react";
import api from "../../api/api";
import {socket} from "../../constants/constants";
import rootStore from "../../stores/RootStore";
import {RootStoreContext} from "../../App";

const JoinButton: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    // const [userName, setUserName] = useState<string>("");
    // const [name, setName] = useState<string>("");

    useEffect(() => {
        socket.on('socketId', ({socketId}) => {
            rootStore.userStore.setId(socketId);
        })
    }, []);

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        rootStore.userStore.setName(event.currentTarget.value);
    }
    const handleJoin = () => {
        api.createUser(rootStore.userStore.getName(), rootStore.userStore.getId())
            .then((response) => {
                console.log(response.data);
                // setUser(response.data.userList);
            })
            .catch((error) => console.log(error));
    };



    return (
        <div>
            <label>
                Name:
                <input type="text" name="name" onChange={handleChange}/>
            </label>
            <button onClick={handleJoin}>Join</button>
        </div>
    );
};

export default JoinButton;
