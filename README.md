# Multiverse Self Study Plan

## Technologies to focus on
- React
  - useContext hook
  - Other React 18 Hooks
- Jest 

## Overall Idea for Final Project
Create a project in React using Context (with useContext hook) for state management. Additionally, you could learn how to use Jest to specifically test your React frontend, as Jest comes prebuilt in the create-react-app. Additionally, think about trying to familiarize yourself with the new hooks of React 18.

## What am I using to study?
- [React 17: Getting Started](https://app.pluralsight.com/library/courses/react-js-getting-started/table-of-contents)
- [5 New Hooks in React 18](https://betterprogramming.pub/5-new-hooks-in-react-18-300aa713cefe)
- [React 18: First Look](https://app.pluralsight.com/library/courses/react-18-first-look/table-of-contents)
- [Testing React 16 Applications with Jest 26](https://app.pluralsight.com/library/courses/testing-react-applications-jest/table-of-contents)

## Progress
[Pluralsight Profile](https://app.pluralsight.com/profile/andrea-berrocal-b)

### Monday 

Went through [React 17: Getting Started](https://app.pluralsight.com/library/courses/react-js-getting-started/table-of-contents) 
- Why react?
  - React is a library not a framework, so it is flexible, you do not have to code everything a certain way. It is also small so it can be customized a lot. React makes working with the DOM a lot easier. Instead of making a JavaScript file and using code like ``` document.getElementById() ``` to grab each individual element in an HTML file, react allows you to work with the virtual DOM. 
  - React is a declarative language, we as developers can describe what we want an app to do and then the app will do it. We describe a user interface in terms of a final state. Then everytime the state changes react changes the UI.
- Basic concepts
  - Components (AKA functions)
    - React Components receive input objects and output objects just like a function. Components are also reusuable and they can manage a private state.
  - Reactive updates
    - react will react to state changes in components and automatically change the UI according to those changes
  - Virtual Views in memory
    - No HTML template language, we use JSX
    - Tree reconciliation
- First React Component
   ```javascript
    import { useState } from 'react';
    function App() {

    // button that starts at 5 a doubles everytime it is clicked
    const[counter, setCounter] = useState(5);

    return (
        <div className="App">
            <button 
            onClick={() => setCounter(counter * 2)}>
            {counter}
            </button>
        </div>
        );
    }

    export default App; 
    ```

- One-Way Data Flow
    - Parent components can flow data and behavior to their child components through props
- Seperation of responsibilities (concerns)
    - make components that each have different responsibilites
```javascript
    import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import { useState } from "react";

function App() {

  const[counter, setCounter] = useState(0);

  const incrementCounter = (increment) => setCounter(counter + increment);

  return (
    <div className="App">
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={100}/>
      <Button onClickFunction={incrementCounter} increment={200}/>
      <Display counter={counter}/>
    </div>
  );
}

export default App;
```
```javascript
    const Display = (props) => {

    return(
        <div>{props.counter}</div>
    );
}
export default Display;
```
```javascript
    const Button = (props) => {
    const handleClick = () => props.onClickFunction(props.increment)
    return(
        <button onClick={handleClick}>+{props.increment}</button>
    );
}
export default Button;
```
- useState hook
  - a hook that lets us add state to function components
  - ``` const [val, setVal] = useState(initialVal);```
  - val is the state variable
  - setVal is a function to change the state
  - we pass an inital value in useState when we first declare it

#### Modern JS Crash Course
