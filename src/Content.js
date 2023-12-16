import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Ismail");
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    const names = ["Abdullah", "Massab", "Umer", "Ismail"];
    const int = Math.floor(Math.random() * 4);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.textContent);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  );
};

export default Content;
