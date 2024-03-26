import React from 'react';
import "./modal.scss";

const Modal = ({ children, onClose }) => {
  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
   
    <div className="modal-background" onClick={handleClose}>
      
    
       {/* Zatvorenie modálneho okna kliknutím mimo obsahu */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Zabránenie zatvorenia modálneho okna kliknutím na obsah */}


        
        <button className="close" onClick={handleClose}><span>x</span></button> {/* Tlačidlo zatvorenia modálneho okna */}

        {children} {/* Obsah modálneho okna */}
      </div>
    </div>
  )
};

export default Modal;
