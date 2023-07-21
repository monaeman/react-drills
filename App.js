import Arrays from "./Arrays";
import Objects from "./object";
import { useState } from "react";
import Form from "./Form";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {};

  const handleIncrementFive = () => {
    setCounter(counter + 5);
  };
  const handleDecrementFive = () => {
    setCounter(counter - 5);
  };
  return (
    <div className="App">
      <h1>React Drills</h1>
      {/* <Arrays /> */}
      {/* <Objects /> */}
      <h1> {counter} </h1>
      <button onClick={handleIncrement}> + </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        {" "}
        -{" "}
      </button>
      <br />
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        reset
      </button>
      <button onClick={handleIncrementFive}> Increment +5</button>
      <button onClick={handleDecrementFive}> Decrement -5</button>
      <h1>Form</h1>
      <Form />
    </div>
  );
}

export default App;
