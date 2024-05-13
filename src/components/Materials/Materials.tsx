//import './Materials.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Material from '../Material/Material'
import React, { useState } from 'react';

const Materials: React.FC = () => {
  const [materials, setMaterials] = useState([])
  const [loading, setLoading] = useState(false)

  const clickHandler = () => {
    setLoading(true);
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then(response => response.json())
      .then(data => setMaterials(data))
      .then(() => setLoading(false))
      .catch(error => { console.log(error) });
  }
 
  const materialsList = materials.map((material) => {
    return (
      <>
        <Row>
          <Col>
            <Material 
            key={material['_id']}
            name={material['name'] + ': '}
            quantityLeft={material['quantityLeft']}
            ></Material>
          </Col>
        </Row>
        
      </>
    )
  })

  return (
    <>
      
     
        <Button disabled={loading} onClick={clickHandler}> Display Inventory </Button>
        <Container>
          {materialsList}
        </Container>
        
    </>
  )
}

export default Materials;
