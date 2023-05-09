import {useState} from "react";
import api from "../../api/api";

const JoinButton = () => {
    const [userName, setUserName] = useState<string>("");
    // const [name, setName] = useState<string>("");

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setUserName(event.currentTarget.value);
    }
    const handleJoin = () => {
        api.createUser(userName)
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
