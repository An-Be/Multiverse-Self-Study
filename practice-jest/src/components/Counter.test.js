import Counter from "./Counter";
import { render, fireEvent } from '@testing-library/react'

describe(Counter, () => {

    it('counter displays correct initial count', () => {
        //use render to render a mock component
        //in the const object we need to grab the jsx elements we want to test
        //we use getByTestId because the content is always changing
        const {getByTestId} = render(<Counter initialCount={0}/>)
        //access text in the element
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    }),
    it('count should increment by 1 if the increment button is clicked', () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={0} />)
        //will get the button that has the text Increment
        const incremementBtn = getByRole('button', {name: "Increment"});
        //fireEvent to make any type of user event
        //test if the button is being clicked
        fireEvent.click(incremementBtn);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(1);
    }),
    it('count should decrement by 1 if the decrement button is clicked', () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={0} />)
        //will get the button that has the text Decrement
        const decrementBtn = getByRole('button', {name: "Decrement"});
        //fireEvent to make any type of user event
        //test if the button is being clicked
        fireEvent.click(decrementBtn);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(-1);
    }),
    it('count should restart to initial count if the restart button is clicked', () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={0} />)
        //will get the button that has the text Decrement
        const decrementBtn = getByRole('button', {name: "Decrement"});
        //fire decrement btn
        fireEvent.click(decrementBtn);
        //get count value after btn clicked
        const countValue1 = Number(getByTestId("count").textContent);
        //expect count to be -1
        expect(countValue1).toEqual(-1);

        //will get the button that has the text Restart
        const restartBtn = getByRole('button', {name: "Restart"});
        // fire restart btn
        fireEvent.click(restartBtn);
        //get counter value after btn click
        const countValue2 = Number(getByTestId("count").textContent);
        //expect counter to reset to initial value 0
        expect(countValue2).toEqual(0);
    }),
    it('count should restart to initial count if the restart button is clicked', () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={0} />)
        //will get the button that has the text Increment
        const incremementBtn = getByRole('button', {name: "Increment"});
        //fire Increment btn
        fireEvent.click(incremementBtn);
        //get count value after btn clicked
        const countValue1 = Number(getByTestId("count").textContent);
        //expect count to be -1
        expect(countValue1).toEqual(1);

        //will get the button that has the text Switch Signs
        const switchBtn = getByRole('button', {name: "Switch Signs"});
        // fire switch signs btn
        fireEvent.click(switchBtn);
        //get counter value after btn click
        const countValue2 = Number(getByTestId("count").textContent);
        //expect counter to switch signs and become negative
        expect(countValue2).toEqual(-1);
    }) 
});