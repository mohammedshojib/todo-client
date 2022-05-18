import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Headers from "./components/Headers";
import RequireAuth from "./components/RequireAuth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
