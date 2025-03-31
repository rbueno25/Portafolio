import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portafolio from "../pages/Portafolio";
import App from "../App";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portafolio" element={<Portafolio />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;