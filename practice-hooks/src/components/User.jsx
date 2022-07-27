import { useContext } from "react";
import { AppContext } from "../views/PracticeContext";

const User = () => {

    //now we can grab whatever states we want by destructuring the context
    const { username} = useContext(AppContext);
    
  return (
    <div>
        <h1>User: {username}</h1>
    </div>
  );
}

export default User;