import React, {createContext} from 'react';
import Users from "./components/users/Users";
import JoinButton from "./components/users/JoinButton";
import RootStore from "./stores/RootStore";


const rootStore = new RootStore();
export const RootStoreContext = createContext(rootStore);

function App() {

    return (
        <RootStoreContext.Provider value={rootStore}>
        <div>
            <p>test</p>

            <Users/>

        </div>
        </RootStoreContext.Provider>
    );
}

export default App;
