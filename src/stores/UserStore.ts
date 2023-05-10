import {makeAutoObservable} from "mobx";
import RootStore from "./RootStore";

export type UserProps = {
    name: string,
    id: string,
    connected: boolean,
};
class UserStore {
    private rootStore: RootStore;
    private name: string = 'userName';
    private id: string = '-1';
    public connected: boolean = false;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setId(id: string) {
        this.id = id;
    }

    public getId () {
        return this.id;
    }
}

export default UserStore;