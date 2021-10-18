import logo from "./logo.svg";
import "./App.css";
import Input from "./Componentss/Input";
import Button from "./Componentss/Button";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    if (number < 10) {
      setNumber(number + 1);
    }
  };

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <Button text="-" actionOnClick={decrement} />
      <Input number={number} />
      <Button text="+" actionOnClick={increment} />
    </>
  );
}

export default App;
