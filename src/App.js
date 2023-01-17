import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Heroes from "./Heroes.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/heroes" element={<Heroes />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
