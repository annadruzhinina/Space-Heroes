import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Heroes from "./Heroes.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<h1>Welcome page</h1>} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/heroes" element={<Heroes />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
