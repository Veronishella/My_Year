import React, { useState } from 'react';
import create from "./create"
import "./homepage.scss"

const CreateForm = () => {
  const [formData, setFormData] = useState('');

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSave = () => {
    create(formData);
    setFormData('');
  };

  return (
    <div>
      <textarea value={formData} onChange={handleChange} />
      <button className="button-save" onClick={handleSave}>Save</button>
      <button className="button-back" onClick={handleSave}>Back</button>
    </div>
  );
};

export default CreateForm;
