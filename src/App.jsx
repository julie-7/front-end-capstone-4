import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { RegisterForm } from "./component/RegisterForm";
import { LoginForm } from "./component/LoginForm.jsx";
import { Notfound } from "./component/Notfound.jsx";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};



