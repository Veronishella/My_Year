import React, { useState } from 'react';
import create from "./create"
import "./homepage.scss"

const CreateForm = ( { onClose }) => {
  const [formData, setFormData] = useState('');

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSave = () => {
    create(formData);
    setFormData('');
  };

  const handleBack = () => {
    onClose();
  }

  return (
    <div className="section-New-Task">
      <textarea className="text-area" value={formData} onChange={handleChange} />

      <div className="buttonSaveBack">
        <button className="button-save" onClick={handleSave}>Save</button>
        <button className="button-back" onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default CreateForm;
