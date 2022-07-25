# Multiverse Self Study Plan


##### Table of Contents
- [Multiverse Self Study Plan](#multiverse-self-study-plan)
        - [Table of Contents](#table-of-contents)
  - [Technologies to focus on](#technologies-to-focus-on)
  - [Overall Idea for Final Project](#overall-idea-for-final-project)
  - [What am I using to study?](#what-am-i-using-to-study)
  - [Progress](#progress)
    - [Monday](#monday)
    - [Tuesday](#tuesday)

## Technologies to focus on
- React
  - useContext hook
  - Other React 18 Hooks
- Jest 

## Overall Idea for Final Project
Create a project in React using Context (with useContext hook) for state management. Additionally, you could learn how to use Jest to specifically test your React frontend, as Jest comes prebuilt in the create-react-app. Additionally, think about trying to familiarize yourself with the new hooks of React 18.

## What am I using to study?
- [ ] [React 17: Getting Started](https://app.pluralsight.com/library/courses/react-js-getting-started/table-of-contents) - in progress
- [ ] [5 New Hooks in React 18](https://betterprogramming.pub/5-new-hooks-in-react-18-300aa713cefe)
- [ ] [React 18: First Look](https://app.pluralsight.com/library/courses/react-18-first-look/table-of-contents)
- [ ] [Testing React 16 Applications with Jest 26](https://app.pluralsight.com/library/courses/testing-react-applications-jest/table-of-contents)

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
- Block scope
    - if we declare a var variable in a block scope, the variable can be accessed outside of it, in modern javascript it is reccommended to use let instead. With let, variables can not be accessed outside of block scope.
        ``` javascript
        for(var i = 1; i <= 10; i++){
            //blocks scope
        }
        //with var i can be accessed from outside which can cause issues instead use let
        for(let i = 1; i<= 10; i++){
            //block scope
        }
        //with let, the variable i can not be accessed
        ```
- Function Scope
    ```javascript
    function sum(a, b){
        //function scope
        let result = a + b
    }
    ```
- const variables
  - use const when the reference assigned to a variable is meant to be constant.
  - const strings and numbers are not mutable however const arrays are objects are. We can not change the reference (so the array or object will always be pointing to the same array or object) but we can change the content of the array or object. So we can push into an array or change values in an object. For example the following code would work and would not cause any errors.
    ``` javascript
    const numbers = [2,4,6];

    numbers.push(7);
    console.log(numbers); // [2, 4, 6, 7]

    const person ={
        firstName:'Bob',
        lastName:'Riley'
    };

    person.firstName = 'Sarah';
    console.log(person) // { firstName: 'Sarah', lastName: 'Riley' }
    ```
- Object Literal

  ```javascript
  const mystery = 'answer';
  const InverseOfPI = 1 / Math.PI;

    const obj= {
    p1: 10,
    p2: 20,
    f1() {},
    f2: () => {},
    [mystery]: 42,
    InverseOfPI, //same as typing InverseOfPI: InverseOfPI
    }

    console.log(obj.mystery) // undefined
    console.log(obj.answer) // 42
  ```
- Desctructuring and Rest/Spread
    ```javascript
    //instead of 
    const PI = Math.PI;
    const E = Math.E;
    const SQRT2 = Math.SQRT2;

    //use
    const {PI, E, SQRT2} = Math;

    const[first, second, third, forth] = [10,20,30,40];

    console.log(first); // 10

    // spread operator
    const[first, ...restOfItems] = [10,20,30,40];
    console.log(restOfItems); // [ 20, 30, 40 ]

    const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastNameL: 'Doe'
    };

    //create a new object that has the same data except for temp1 and temp2
    const{temp1, temp2, ...person} = data;

    console.log(person); // { firstName: 'John', lastNameL: 'Doe' }

    const newObj = {
    ...person
    }
    console.log(newObj); // { firstName: 'John', lastNameL: 'Doe' }
    ```
- Classes
    ```javascript
    class Person{
        constructor(name){
            this.name = name;
        }
        //method
        greet() {
            console.log(`Hello ${this.name}`)
        }
    }
    //child of Person class
    //Student class inherets variables and methods from parent class
    class Student extends Person{
        constructor(name, level){
            super(name);
            this.level = level;
        }
        greet() {
            console.log(`Hello ${this.name} from ${this.level}`)
        }
    }

    //classes are blueprints for objects
    //to instantiate an object from a class you need to use new keyword
    const o1 = new Person("Max");
    const o2 = new Student("Tina", "11th Grade");
    const o3 = new Student("Mary", "10th Grade");
    //change what greet logs
    o3.greet = () => console.log('I am special!'); 

    o1.greet(); //Hello Max
    o2.greet(); //Hello Tina from 11th Grade
    o3.greet(); //I am Special!
    ```
 - Promises and Async/Await
    ```javascript
    const fetchData = async () => {
        const response = await fetch('https://api.github.com');
        const data = await response.json();
        console.log(data);
        }
    fetchData();
    ```
- The GitHub Cards App
  - App that using axios to get github users by inputting their username
  - used both class components and function components to better understand class components
  - compononents:
    - Card
    - CardList
    - Form
  - images:
    ![image](./readmeImg/four.png "image1")
    ![image](./readmeImg/one.png "image2")
    ![image](./readmeImg/two.png "image3")
    ![image](./readmeImg/three.png "image4")

### Tuesday 