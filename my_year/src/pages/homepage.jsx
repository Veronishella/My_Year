import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
//import create from "./create"
import CreateForm from "./createForm"
import supabase from '../client.js'
import TaskDisplay from "./taskDisplay.jsx"
import ReadData from "./read"
import "./homepage.scss"

import Modal from "./modal"





const Homepages = ({ token }) => {
  //const [isModalOpen, setIsModalOpen] = useState(false); // NOVE: Stav pre sledovanie otvorenia/zatvorenia modálneho okna
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDataVisible, setDataVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0)
  let navigate = useNavigate();
  const [isTaskDisplayOpen, setIsTaskDisplayOpen] = useState(false); // NOVE: Stav pre sledovanie otvorenia/zatvorenia modálneho okna
  


 
  function handleLogout() {
    sessionStorage.removeItem('token');
    navigate("/")
  }


//TODO: nastavit stav "OK" pre User - informacia o uložení poznámky
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
      const { user} = token;
      const userID = user.id
      const { data, error } = await supabase
        .from('task')
        .select('*')//volím všetky stlpce
        .eq('user_id', userID); 


      if (error) throw error;
      console.log('Úlohy získané z databázy:', data);
      setTasks(data); // Uložíme úlohy do stavu
      setIsTaskDisplayOpen(true);
      setDataVisible(true); // Nastavíme  stav pre zobrazenie údajov
    } catch (error) {
      console.error('Chyba pri načívaní z databázy:', error.message);
    }
  };

  const handleModalClose = () => {
    setIsTaskDisplayOpen(false);
  };

  const handleBack = () => {
    setIsFormVisible(false);
  }
  


 return (
  <div className="section-hs-body">
    <h1>Welcome back, {token.user.user_metadata.full_Name}</h1>
    <button onClick={() => setIsFormVisible(true)}>New</button>
    {isFormVisible && 
    <CreateForm onClose={handleBack} onSave={handleSave} />}
  
    <ReadData tasks={tasks} />

    <button onClick={handleFetchData}>Read</button>    


    {isTaskDisplayOpen && ( // Zobraziť modálne okno len ak je otvorené
        <Modal onClose={handleModalClose}> {/* Komponent Modal s funkciou na zatvorenie */}
          <TaskDisplay tasks={tasks} /> {/* Komponent TaskDisplay s načítanými údajmi */}
        </Modal>
      )}


    <button>♥</button>  
    <button onClick={handleLogout}>Logout</button>
  </div> 
  )
}

export default Homepages;
