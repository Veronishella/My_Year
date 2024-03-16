import React, { useState } from 'react';
import create from "./create"

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
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CreateForm;
