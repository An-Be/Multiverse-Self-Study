import { useReducer } from 'react';

//pass in the state and action
//action is used to determine what type of action we want to make
const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText}
        case "TOGGLESHOWTEXT":
            return {count: state.count, showText: !state.showText}
        default:
            return state;
    }
}

const Practice = () => {
    //dispatch is used to change the state
    //in useREducer we pass in a reducer function and the intial state
    const [state, dispatch] = useReducer(reducer, 
        { count: 0, showText: true });

    return(
        <>
        <h1>{state.count}</h1>
            <button  
        onClick={() => {
            dispatch({type: "INCREMENT"})
            dispatch({type: "TOGGLESHOWTEXT"})
        }}
        >Click here</button>
        {state.showText && <p>This is a test</p>}
      </>
    );
}
export default Practice;