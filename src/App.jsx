import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./component/Register.jsx";
import { LogIn } from "./component/LogIn.jsx";
import { Forbiden } from "./component/Forbiden.jsx";
import { Menu } from "./component/Menu.jsx";
import { TaskScreen } from "./ScreenComponent/TaskScreen.jsx";
import { TaskForm } from "./component/TaskForm.jsx";

export const App = () => {



  /*useEffect(() => {

    token = window.localStorage.getItem(`credential`)
    validateToken()
  }, [])*/

  return (
    <Router>
      <Menu></Menu>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LogIn />} />
        <Route path="*" element={<Forbiden />} />
        <Route path="/task" element={<TaskScreen/>}/>
      </Routes>
    </Router>
  )

    

  /*return (
    <>
      <BrowserRouter>
        {isLogin ? <menu /> : ""}
        <Routes path='/' element={<LogIn />}>
          {isLogin ? <Route path='/dashboard' element={<DashBoard/>} /> : ""}
          {isLogin ? <Route path='/earning' element={<Earnings/>} /> : ""}
        </Routes>
      </BrowserRouter>
    </>
  )*/
}

export default App





