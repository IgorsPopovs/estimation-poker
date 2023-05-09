import {makeAutoObservable} from "mobx";

export type UserProps = {
    name: string,
};
class UserStore {
    public name: string
    constructor(card: UserProps) {
        this.name = card.name;
        makeAutoObservable(this);
    }

    public getName() {
        return this.name;
    }
}

export default UserStore;