import React, { useState } from "react";

export default function Counter() {
  console.log("counterRender");

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  console.log(name);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>{name}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <CounterView value={counter} />
      <Test />
    </div>
  );
} 

function CounterView(props) {
  console.log("renderCounterView", props.value);

  return <div>Counter - {props.value}</div>;
}

function Test() {
  console.log("renderTest");

  return <div>Test </div>;
}
