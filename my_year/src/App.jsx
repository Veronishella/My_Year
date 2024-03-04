import React from 'react'
import { Signup, Login } from "./pages"
import { Routes, Route } from "react-router-dom"
import SignUp from './pages/signup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/signup"} element={<SignUp/>} />
        <Route path={"/"} element={<Login/>} />
      </Routes>
    
    </div>
  )
}

export default App
