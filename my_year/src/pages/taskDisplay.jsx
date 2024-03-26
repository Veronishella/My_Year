
import "./taskDisplay.scss";
import React, { useState } from 'react';
import { format } from 'date-fns';


const TaskDisplay = ({ tasks }) => {
  const [currentItem, setCurrentItem] = useState(0); // Stav pre sledovanie aktuálnej položky

  const handleNext = () => {
    setCurrentItem((prevItem) => Math.min(prevItem + 1, tasks.length - 1)); // Prejde na ďalšiu položku
  };

  const handlePrev = () => {
    setCurrentItem((prevItem) => Math.max(prevItem - 1, 0)); // Prejde na predchádzajúcu položku
  };


  //<button className="close" onClick={onClose}>X</button> {/* Tlačidlo zatvorenia modálneho okna */} 

  return (

    <div className="modal-background section-hs-body">
      <div className="modal-content">
        <ul>
          <li>
            {/* Zobrazenie úlohy na základe aktuálneho prvku */}
            <p className="p-tasks">{tasks[currentItem].taskData}</p>
            <p className="p-date">{format(new Date(tasks[currentItem].created_at), 'dd/MM/yyyy')}</p>
          </li>
        </ul>
        <div>
          <button onClick={handlePrev} disabled={currentItem === 0}>Prev</button>
          <span>{currentItem + 1}/{tasks.length}</span> {/* Zobrazenie aktuálnej položky a celkového počtu */}
          <button onClick={handleNext} disabled={currentItem === tasks.length - 1}>Next</button>
        </div>
      </div>
    </div>

    
  );
};

export default TaskDisplay;


