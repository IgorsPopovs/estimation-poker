import UserStore from "./UserStore";

class RootStore {
    public userStore: UserStore;

    constructor() {
        this.userStore = new UserStore(this);
    }
}

export default RootStore;