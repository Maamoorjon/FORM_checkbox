import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className="App">
      <h2>FORM checkbox</h2>
      <label key="myCheck" htmlFor="myCheck">
        Check:{" "}
      </label>
      <input
        type="checkbox"
        id="myCheck"
        checked={isChecked}
        value=""
        onChange={() => setIsChecked((prevstate) => !prevstate)}
      />
      <h3>{isChecked ? "ON!" : "OFF"}</h3>
    </div>
  );
}
