import { useState, createContext } from "react";
import Login from "../components/Login";
import User from "../components/User";

//create a context, a context is basically like a collection of states
export const AppContext = createContext(null);
//to use the context you need to wrap the components that you want to be able to access the states in whatever name you named the context.provider
//so in this case we would wrap them in <AppContext.Provider></AppContext.Provider>
//then you pass a value which would be all the states you want the other components to have access to

const PracticeContext = () => {
    const [username, setUsername] = useState('');

    return(
        <AppContext.Provider value={{username, setUsername}}>
            <Login /> <User />
        </AppContext.Provider>
    )
}
export default PracticeContext;