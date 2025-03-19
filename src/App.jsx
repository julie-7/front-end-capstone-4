import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterForm } from "./component/registerform.jsx";
import { LoginForm } from "./component/loginform.jsx";
import { Notfound } from "./component/notfound.jsx";
import{menu} from "./Screencomponents/"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="*" element={<Notfound />} />
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





