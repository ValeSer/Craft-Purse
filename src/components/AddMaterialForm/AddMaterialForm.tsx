import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './AddMaterialForm.css'

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


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // API call
      const response = await fetch(import.meta.env.VITE_BACKEND_URL+ "/material", {
        method: "POST",
        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: formValues.name, quantityLeft: formValues.quantityLeft }),
      });
      if (response.ok) {
        console.log('submitted,ok');
      } else {
        console.log("Submit failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    finally {
      setLoading(false)
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