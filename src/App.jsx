import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./component/Register.jsx";
import { LogIn } from "./component/LogIn.jsx";
import { Forbiden } from "./component/Forbiden.jsx";
import { Menu } from "./component/Menu.jsx";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LogIn />} />
        <Route path="*" element={<Forbiden />} />
      </Routes>
    </Router>
  )

    useEffect(() => {

      token = window.localStorage.getItem(`todolist`)
      validateToken()
    }, [])

  return (
    <>
      <BrowserRouter>
        {isLogin ? <menu /> : ""}
        <Routes path='/' element={<LogIn />}>
          {isLogin ? <Route path='/dashboard' element={<DashBoard/>} /> : ""}
          {isLogin ? <Route path='/earning' element={<Earnings/>} /> : ""}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App





