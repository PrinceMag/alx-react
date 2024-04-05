import React, { useRef } from "react";
import logo from "./holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  // Create refs for input fields
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  // Function to focus on input field when label is clicked
  const handleLabelClick = (inputRef) => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          {/* Associate label with input using htmlFor */}
          <label htmlFor="email" onClick={() => handleLabelClick(emailInputRef)}>
            Email:
          </label>
          {/* Add ref to input field */}
          <input type="email" id="email" name="email" ref={emailInputRef} />
          {/* Associate label with input using htmlFor */}
          <label htmlFor="password" onClick={() => handleLabelClick(passwordInputRef)}>
            Password:
          </label>
          {/* Add ref to input field */}
          <input type="password" id="password" name="password" ref={passwordInputRef} />
          <button>OK</button>
        </form>
      </div>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    </div>
  );
}

export default App;
