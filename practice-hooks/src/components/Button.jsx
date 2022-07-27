import { forwardRef, useImperativeHandle, useState } from "react";
const Button = forwardRef((props, ref) => {
    //forwardRef allows us to transform a function component to allow it to accept a ref from its parent
    //after wrapping the component in forward ref, we can pass in a ref as a parameter
    const [toggle, setToggle] = useState(false)

    //use ImperativeHandle hook allows us to define functions based on a ref
    //we pass the ref and a function that returns an object
    //create functions that we want to access through the parent
    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle)
        }
    })) 
    return (
        <>
            <button
                // onClick={() => {
                //     setToggle(!toggle);
                // }}
            >Button From Child</button>
            {toggle && <span>Toggle</span>}
        </>
    );
});
export default Button;