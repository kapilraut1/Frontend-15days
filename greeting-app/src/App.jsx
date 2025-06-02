import { useState } from "react";
import "./App.css";
function App() {
  const [greeting, setGreeting] = useState("Hello, World!");
  const [name, setName] = useState("");
  const handlerSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Hello, have a good day developer, ${name}!`);
  };
  return (
    <>
      <div className="greeting-container">
        <h2>Greeting way</h2>
        <form onSubmit={handlerSubmit}>
          <label htmlFor="Name">Enter your name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">Submit..</button>
        </form>
      </div>

      <div className="greeting">
        <h2>{greeting}</h2>
        <button onClick={() => setGreeting("Hello, World!")}>
          Reset Greeting
        </button>
      </div>
    </>
  );
}

export default App;
