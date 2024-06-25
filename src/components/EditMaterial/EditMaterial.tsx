import React, { useState } from 'react';

interface EditMaterialProps {
  _id: string;
  name: string;
  quantityLeft: number;
  onCancel: () => void;
}

interface FormValues {
  name: string;
  quantityLeft: number;
}

const EditMaterial = (props: EditMaterialProps) => {

  const [formValues, setFormValues] = useState<FormValues>({
    name: props.name,
    quantityLeft: props.quantityLeft
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target)
    setFormValues((prev) => ({ ...prev, [name]: value }));
    console.log(formValues)
  };

  return (
    <>
    <div className='row-material'>
      <input name="name" className='name' value={formValues.name} onChange={handleInputChange}></input>
      <input name="quantityLeft" className='quantity' value={formValues.quantityLeft} onChange={handleInputChange}></input>
      <button className='edit-toggle' onClick={props.onCancel}>Cancel</button>
    </div>
    </>
  )
}

export default EditMaterial;