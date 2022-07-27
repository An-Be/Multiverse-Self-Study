import { useState, useTransition } from "react";
const PracticeTransition = () => {
    //
    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const LIST_SIZE = 20000;

    function handleChange(e) {
        setInput(e.target.value)
        //to use the transition we put the lower priority function instead startTransition
        //now we will be sure that setInput will always run first and not sit there and wait until setList  has also completed
        startTransition(() => {
            const l = [];
            for(let i = 0; i < LIST_SIZE; i++){
                l.push(e.target.value)
            }
            setList(l)
        })

    }

    //we can use the isPending property passed into useTransition, to show something while our program is working on the low priority function
    
    return(
        <>
            <input type="text" value={input} onChange={handleChange} />
            {isPending ? "Loading..." :
            list.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </>
    );
}
export default PracticeTransition;