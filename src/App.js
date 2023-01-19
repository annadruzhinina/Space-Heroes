import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./screens/Home.jsx";
import Characters from "./screens/Characters.jsx";
import CharacterDetail from "./screens/CharacterDetail.jsx";
import CharacterEdit from "./screens/CharacterEdit.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
            {/* <Route path="/characters" element={<CharacterCreate />} /> */}
            <Route path="/characters/:id/edit" element={<CharacterEdit />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
