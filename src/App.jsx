import { useState } from "react";
import "./App.css";

function App() {
  const [valueInput, setValueInput] = useState("");
  const [valueInput2, setValueInput2] = useState("");
  const [operatorCurrent, setOperatorCurrent] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    setValueInput(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setValueInput2(e.target.value);
  };

  const handleOperatorCurrent = (value) => {
    setOperatorCurrent(value);
  };

  const calculation = (a, b) => {
    if (Number(b) == 0) {
      alert("No se puede dividir por cero!");
    }
    if (operatorCurrent == "+") {
      console.log(Number(a) + Number(b));
      setOutput(Number(a) + Number(b));
      setValueInput("");
      setValueInput2("");
      setOperatorCurrent("");
    }
    if (operatorCurrent == "-") {
      setOutput(Number(a) - Number(b));
    }
    if (operatorCurrent == "*") {
      setOutput(Number(a) * Number(b));
    }
    if (operatorCurrent == "/" && Number(b) !== 0) {
      setOutput(Number(a) / Number(b));
    }

    setValueInput("");
    setValueInput2("");
    setOperatorCurrent("");
  };

  return (
    <>
      <div className="container">
        <input value={valueInput} type="number" onChange={handleInputChange} />
        <div className="container-buttons">
          <button onClick={() => handleOperatorCurrent("+")}>+</button>
          <button onClick={() => handleOperatorCurrent("-")}>-</button>
          <button onClick={() => handleOperatorCurrent("*")}>*</button>
          <button onClick={() => handleOperatorCurrent("/")}>/</button>
        </div>
        <input
          value={valueInput2}
          type="number"
          onChange={handleInputChange2}
        />
        <button onClick={() => calculation(valueInput, valueInput2)}>=</button>
        <div className="output"> {output} </div>
      </div>
    </>
  );
}

export default App;
