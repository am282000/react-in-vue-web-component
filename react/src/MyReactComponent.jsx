import React, { useState } from "react";

const MyReactComponent = ({ message, random, onCustomEvent }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (onCustomEvent) onCustomEvent(newCount);
  };
  return (
    <>
      <h2>Resource Schedule - Web component React</h2>
      <p>Prop 1: {message}</p>
      <p>Prop 2: {random}</p>
      <div>
        <button onClick={handleClick}>Increment Counter</button>
        <p>Current Count: {count}</p>
      </div>
    </>
  );
};

export default MyReactComponent;
