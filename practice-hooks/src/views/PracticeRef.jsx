import { useRef } from "react";


const PracticeRef = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        console.log(inputRef.current.value);
        //focus on input when button is clicked
        inputRef.current.focus();
        //to clear input
        // inputRef.current.value = "";
    }

    return(
        <div>
            <h1>Andrea</h1>
            <input ref={inputRef} type="text" placeholder="Ex..." />
            <button onClick={onClick}>Change Name</button>
        </div>
    );
}
export default PracticeRef;