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
import Firstworldwar from "./components/warPages/Firstworldwar";
import Romeempire from "./components/warPages/Romeempire";
import Revolution from "./components/warPages/Revolution";
import Napoleon from "./components/warPages/Napoleon";
import Error from "./containers/error/Error";
import AuthPage from "./containers/login/AuthPage";

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

  const isWorldHistoryDetail =
    location.pathname.startsWith("/world-history/") &&
    location.pathname !== "/world-history";

  return (
    <div className="App">
      {!location.pathname.startsWith("/world-history") && (
        <Header
          onHomeClick={onHomeClick}
          onAbiturientiClick={onAbiturientiClick}
        />
      )}

      <Routes>
        <Route path="/" element={<Home onReset={resetHome} />} />
        <Route path="/historiography" element={<Historiography />} />
        <Route path="/world-history" element={<WorldHistory />} />
        <Route
          path="/world-history/first-world-war"
          element={
            <>
              <Header />
              <Firstworldwar />
            </>
          }
        />
        <Route
          path="/world-history/rome"
          element={
            <>
              <Header />
              <Romeempire />
            </>
          }
        />
        <Route
          path="/world-history/revolution"
          element={
            <>
              <Header />
              <Revolution />
            </>
          }
        />
        <Route
          path="/world-history/napoleon"
          element={
            <>
              <Header />
              <Napoleon />
            </>
          }
        />
        <Route path="/kings" element={<Kings />} />
        <Route
          path="/abiturienti"
          element={<Abiturienti onReset={resetAbiturienti} />}
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {!location.pathname.startsWith("/world-history") && (
        <Footer
          onHomeClick={onHomeClick}
          onAbiturientiClick={onAbiturientiClick}
        />
      )}
    </div>
  );
}

export default App;
