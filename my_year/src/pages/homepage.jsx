import { useNavigate } from 'react-router-dom'
import React from 'react'

const Homepages = ({token}) => {

  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem('token');
    navigate("/")
  }


  return (
      <>
      <h1>Welcome back, {token.user.user_metadata.full_Name}</h1>
      <button onClick={handleLogout}>Logout</button>
      </>
  )
}

export default Homepages;
