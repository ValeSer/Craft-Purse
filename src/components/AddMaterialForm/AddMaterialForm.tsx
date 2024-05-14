import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddMaterialForm() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Material name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Material-Name" />
      </FloatingLabel>
      
    </>
  );
}

export default AddMaterialForm;