import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
//import create from "./create"
import CreateForm from "./createForm"
import supabase from '../client.js'
import ReadData from "./read"
import "./homepage.scss"



const Homepages = ({ token }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDataVisible, setDataVisible] = useState(false);
  let navigate = useNavigate();


  function handleLogout() {
    sessionStorage.removeItem('token');
    navigate("/")
  }


  const handleSave = async (data) => {
    try {
      // Ulož data do tabuľky v Supabase
      const { data: newTask, error } = await supabase
        .from('task') 
        .insert([{ taskData: data }]); // Ulož dáta z formulára do tabuľky
      if (error) throw error;
      console.log('Nový úkol bol úspešne vytvorený:', newTask);
      setIsFormVisible(false); // Skryť formulár po uložení úlohy
    } catch (error) {
      console.error('Chyba pri ukladaní úlohy:', error.message);
    }
  };

  const handleFetchData = async () => {
    try {
      //získanie údajov z databázy
      const { data, error } = await supabase
        .from('task')
        .select('*'); //volím všetky stlpce
      if (error) throw error;
      console.log('Úlohy získané z databázy:', data);
      setDataVisible(true); // Nastavíme  stav pre zobrazenie údajov
    } catch (error) {
      console.error('Chyba pri načívaní z databázy:', error.message);
    }
  };


  return (
    <div className="section-hs-body">
      <h1>Welcome back, {token.user.user_metadata.full_Name}</h1>
      

      <button onClick={() => setIsFormVisible(true)}>New</button>
      {isFormVisible && <CreateForm onSave={handleSave} />}

      <button onClick={handleFetchData}>Read my task</button>
      {isDataVisible && <ReadData />}

      <button>♥</button>

      <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Homepages;
