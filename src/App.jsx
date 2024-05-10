import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center w-100">
        <Counter />
      </div>
    </>
  );
}

export default App;
