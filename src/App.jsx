import React from "react";
import App from './App.jsx';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { RegisterForm } from "./component/registerform";
import { LoginForm } from "./component/loginform";
import { Notfound } from "./component/notfound";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};



