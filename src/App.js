import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./styles.css";
import Header from "./components/header/Header";
import Home from "./containers/home/Home";
import Historiography from "./containers/historiography/Historiography";
import WorldHistory from "./containers/worldHistory/WorldHistory";
import Kings from "./containers/kings/Kings";
import Abiturienti from "./containers/abiturienti/Abiturienti";
import Footer from "./components/footer/Footer";

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
      <MainContent
        resetHome={resetHome}
        resetAbiturienti={resetAbiturienti}
        onHomeClick={handleHomeClick}
        onAbiturientiClick={handleAbiturientiClick}
      />
    </Router>
  );
}

function MainContent({
  resetHome,
  resetAbiturienti,
  onHomeClick,
  onAbiturientiClick,
}) {
  const location = useLocation();

  return (
    <div className="App">
      
      {location.pathname !== "/world-history" && (
        <Header
          onHomeClick={onHomeClick}
          onAbiturientiClick={onAbiturientiClick}
        />
      )}

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
      {location.pathname !== "/world-history" && (
        <Footer />
      )}
    </div>
  );
}

export default App;
