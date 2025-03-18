import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Register } from "./component/Register.jsx";
import { LogIn } from "./component/LogIn.jsx";
import { Forbiden } from "./component/Forbiden.jsx";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LogIn />} />
        <Route path="*" element={<Forbiden />} />
      </Routes>
    </Router>
  );
};



