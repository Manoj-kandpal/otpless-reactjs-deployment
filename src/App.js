import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = (otplessUser) => {
      // Retrieve the user's details after successful login
      const waName = otplessUser.waName;
      const waNumber = otplessUser.waNumber;

      console.log(otplessUser, waName, waNumber);
      // Handle the signup/signin process
      // ...
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div id="otpless"></div>
      </header>
    </div>
  );
}

export default App;
