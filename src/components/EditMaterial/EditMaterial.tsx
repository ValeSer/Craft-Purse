import React, { useState } from 'react';

interface EditMaterialProps {
  _id: string;
  name: string;
  quantityLeft: number;
  onCancel: () => void;
  onUpdate: () => void;
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

  const onSubmit = async () => {
    const response = await fetch(import.meta.env.VITE_BACKEND_URL+ "/material", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ materialId: props._id, name: formValues.name, quantityLeft: formValues.quantityLeft }),
    });
    if (response.ok) {
      console.log('submitted,ok');
      props.onUpdate()
    }
  }

  return (
    <>
    <div className='row-material'>
      <input name="name" className='name' value={formValues.name} onChange={handleInputChange}></input>
      <input name="quantityLeft" className='quantity' value={formValues.quantityLeft} onChange={handleInputChange}></input>
      <button className='submit' onClick={onSubmit}>Submit</button>
      <button className='cancel' onClick={props.onCancel}>Cancel</button>
    </div>
    </>
  )
}

export default EditMaterial;