
import React, { useState } from 'react'
import { supabase } from '../client'
import { AuthApiError } from '@supabase/supabase-js'
import { Link } from 'react-router-dom'


const SignUp = () => {

  //set Component state
  const [formData,setFormData] = useState({
    fullName:"",
    email: "",
    password:"",
  })

  console.log(formData)
  //fn for getting some changes from input fields
  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        //set the new value from user input
      [event.target.name]: event.target.value
      }
    })

  }

  async function handleSubmit(event){
    event.preventDefault();
    try {
      //console.log("kod v bloku try je spusten")
      const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_Name: formData.fullName,
            }
          }
        });

        if (error) {      
          console.log('Signup error', error)
          alert(error) }

      alert("Check your email for verification link")
      } //catch (error) {
       //alert(error)
       catch (error) {
        alert("Chyba chytena", error)

        }
     
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Fullname"
          name="fullName"
          onChange={handleChange}
          />

        <input 
          placeholder="Email"
          name="email"
          onChange={handleChange}
          />

        <input 
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
          />

        <button type="submit">Submit
        </button>

      </form>

      Already have an account? <Link to="/">Login</Link>
    </div>
  )
}

export default SignUp;
