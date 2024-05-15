import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

interface FormValues {
  name: string;
  quantityLeft: number;
}

function AddMaterialForm() {
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    quantityLeft: 0
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target)
    setFormValues((prev) => ({ ...prev, [name]: value }));
    console.log(formValues)
  };

  
  const newFormData = () => {
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("quantityLeft", formValues.quantityLeft);
    return formData;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // API call
      const response = await fetch("http://localhost:3000/material", {
        method: "POST",
        credentials: "include",
        body: newFormData(),
      });
      if (response.ok) {
        console.log('submitted,ok');
      } else {
        console.log("Submit failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  return (
    <>
    <form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="floatingInput"
        label="name"
        className="mb-3"
        //onChange={handleInputChange}
        
      >
        <Form.Control name="name" type="text" placeholder="Name" onChange={handleInputChange}/>
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="quantity"
        className="mb-3"
      >
        <Form.Control name="quantityLeft" type="number" placeholder="Quantity" onChange={handleInputChange}/>
      </FloatingLabel>
      
      <div className="d-grid gap-2">
      <Button variant="primary" disabled={loading} type="submit">
        Submit
      </Button>
      
    </div>
    </form>
    </>
  );
}

export default AddMaterialForm;