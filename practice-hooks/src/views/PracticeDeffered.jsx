import List from "../components/List";
import { useState } from "react";
const PracticeDeferred = () => {
    const [input, setInput] = useState("");

    function handleChange(e) {
        setInput(e.target.value)
    }

    return(
        <>
            <input type="text" value={input} onChange={handleChange} />
            <List input={input} />
        </>
    );

}
export default PracticeDeferred;