import React, { useEffect, useState } from "react";

const Calculator = () => {
  const btnClass = "bg-green-700 rounded-xl h-10 active:bg-green-500";

  const firstNumber = Math.floor(Math.random() * 10 + 1);
  const secondNumber = Math.floor(Math.random() * 10 + 1);
  const result = firstNumber * secondNumber;

  const [first, setFirst] = useState(firstNumber);
  const [second, setSecond] = useState(secondNumber);
  const [ans, setAns] = useState(result);
  const [output, setOutput] = useState("");
  const [count, setCount] = useState(0);

  const handleSubmit = () => {
    if (output == ans) {
      setOutput("");

      setCount(count + 1);

      const firstNumber = Math.floor(Math.random() * 10 + 1);
      const secondNumber = Math.floor(Math.random() * 10 + 1);

      const result = firstNumber * secondNumber;

      setAns(result);

      setFirst(firstNumber);
      setSecond(secondNumber);
    } else {
      alert(`OOPS! Incorrect Your Score was ${count}`);
      window.location.reload();
    }
  };

  let newValue = "";

  const inputBtn = (e) => {
    newValue = output + e.target.value;
    setOutput(newValue);
  };

  const removeInput = () => {
    let newStr = output.substring(0, output.length - 1);
    setOutput(newStr);
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center m-10 gap-4">
        <div>
          <h1 className="text-4xl">{first}</h1>
        </div>
        <div>
          <h1 className="text-4xl">×</h1>
        </div>
        <h1 className="text-4xl">{second}</h1>
        <div>
          <h1 className="text-4xl">=</h1>
        </div>
        <div
          className="flex items-center justify-center text-4xl"
          value={output}
        >
          {output}
        </div>
      </div>

      <div className="grid grid-cols-3 m-10 gap-2">
        <button className={`${btnClass}`} onClick={inputBtn} key={7} value={7}>
          7
        </button>
        <button className={`${btnClass}`} onClick={inputBtn} key={8} value={8}>
          8
        </button>
        <button className={`${btnClass}`} onClick={inputBtn} key={9} value={9}>
          9
        </button>
        <button className={`${btnClass}`} onClick={inputBtn} key={4} value={4}>
          4
        </button>
        <button className={`${btnClass}`} onClick={inputBtn} key={5} value={5}>
          5
        </button>
        <button className={`${btnClass}`} onClick={inputBtn} key={6} value={6}>
          6
        </button>
        <button className={`${btnClass}`} onClick={inputBtn} key={1} value={1}>
          1
        </button>
        <button className={`${btnClass}`} onClick={inputBtn} key={2} value={2}>
          2
        </button>
        <button className={`${btnClass}`} onClick={inputBtn} key={3} value={3}>
          3
        </button>
        <button
          className={`${btnClass} col-span-3`}
          onClick={inputBtn}
          key={0}
          value={0}
        >
          0
        </button>
        <button
          className={`${btnClass} bg-yellow-400 active:bg-yellow-300 col-span-1`}
          onClick={removeInput}
        >
          ⌫
        </button>
        <button
          className={`${btnClass} bg-blue-600 active:bg-blue-300 col-span-2`}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className="flex items-center justify-center text-3xl mb-6">
        Your Score is {count}
      </div>
    </>
  );
};

export default Calculator;
