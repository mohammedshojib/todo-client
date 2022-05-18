import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./Home";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
