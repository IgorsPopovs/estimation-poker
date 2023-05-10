import UserStore from "./UserStore";
import User from "../components/users/user/User";

class RootStore {
    public userStore: UserStore;

    constructor() {
        this.userStore = new UserStore(this);
    }
}

export default RootStore;