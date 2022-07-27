import { useState, useCallback } from "react";
import Child from "../components/Child";
const PracticeCallback = () => {
    const [toggle, setToggle] = useState(null);
    const [data, setData] = useState("Hello! ");



    const returnComment = useCallback((name) => {
        return data + name;
    }, [data]);

    return(
        <div>
            <Child returnComment={returnComment} />
            <button
                onClick={() => {
                    setToggle(!toggle)
                }}
            >{" "}Toggle</button>
            {toggle && <h1>toggle</h1>}
        </div>
    );
}
export default PracticeCallback;