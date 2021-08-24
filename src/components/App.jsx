import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setText] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setText(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
