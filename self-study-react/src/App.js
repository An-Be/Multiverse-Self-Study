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
