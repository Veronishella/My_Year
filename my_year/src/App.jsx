import React, { useState, useEffect }from 'react'
import  SignUp  from "./pages/signup"
import  Login  from "./pages/login"
import  Homepages  from "./pages/homepage"
import TaskDisplay from './pages/taskDisplay'
import { Routes, Route } from "react-router-dom"
import ReadData from "./pages/read"


const App = () => {

  const [token, setToken] = useState(false)
  
  if(token){
    sessionStorage.setItem("token", JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem("token")){
      let data = JSON.parse(sessionStorage.getItem("token"))
      setToken(data)
    }
  }, []);



  return (
    <div>
      <Routes>
        <Route path={"/signup"} element={<SignUp/>} />
        <Route path={"/"} element={<Login setToken={setToken}/>} />

        <Route path={"/homepage"} element={<Homepages token={token}/>} /> 
        {token?<Route path={"/homepage"} element={<Homepages token={token}/>} /> : "" }

        <Route path={"/taskdisplay"} element={<TaskDisplay token={token}/>} />
        
       
        
        
      </Routes>
    
    </div>
  )
}

export default App
