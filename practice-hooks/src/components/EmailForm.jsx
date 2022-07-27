import { useId } from "react";

const EmailForm = () => {
    //generates a random id and the same set of id are set even after a render
    //this is better than using something like math.random because with math.random, the id would change with every render
    const id = useId();  
 return(
    <>
        <label htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} type="email" />
        <br />
        <label htmlFor={`${id}-name`}>Name</label>
        <input id={`${id}-name`} type="text" />
    </>
 );
}
export default EmailForm;