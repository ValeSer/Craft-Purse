import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddMaterialForm() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Name" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="quantity"
        className="mb-3"
      >
        <Form.Control type="number" placeholder="Quantity" />
      </FloatingLabel>
      
    </>
  );
}

export default AddMaterialForm;