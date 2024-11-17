import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Header from "./components/header/Header";
import Home from "./containers/home/Home";
import Historiography from "./containers/historiography/Historiography";
import WorldHistory from "./containers/worldHistory/WorldHistory";
import Kings from "./containers/kings/Kings";
import Abiturienti from "./containers/abiturienti/Abiturienti";

function App() {
  const [resetHome, setResetHome] = useState(false);
  const [resetAbiturienti, setResetAbiturienti] = useState(false);

  const handleHomeClick = () => {
    setResetHome(true);
    setTimeout(() => setResetHome(false), 0);
  };

  const handleAbiturientiClick = () => {
    setResetAbiturienti(true);
    setTimeout(() => setResetAbiturienti(false), 0);
  };

  return (
    <Router>
      <div className="App">
        <Header
          onHomeClick={handleHomeClick}
          onAbiturientiClick={handleAbiturientiClick}
        />
        <Routes>
          <Route path="/" element={<Home onReset={resetHome} />} />
          <Route path="/historiography" element={<Historiography />} />
          <Route path="/world-history" element={<WorldHistory />} />
          <Route path="/kings" element={<Kings />} />
          <Route
            path="/abiturienti"
            element={<Abiturienti onReset={resetAbiturienti} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
