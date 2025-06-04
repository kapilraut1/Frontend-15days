import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  return (
    <div className="container">
      <h1>Log in box</h1>
      {login ? (
        <div className="login-box">
          <h2>Welcome back {name} </h2>
          <button
            onClick={() => {
              setLogin(false);
              setName("");
            }}
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="login-box">
          <h2>Please log in</h2>
          <p>Enter your name and password to log in.</p>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>

          <input type="password" placeholder="Enter your password" />
          <br />
          <br />
          <button
            onClick={() => {
              setLogin(true);
            }}
          >
            Log in
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
