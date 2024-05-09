import './Materials.css';
import Material from '../Material/Material'
import React, { useState }from 'react';

const Materials: React.FC = () => {
  const [materials, setMaterials] = useState([])
  const [loading, setLoading] = useState(false)

  const clickHandler = () => {
    setLoading(true);
    fetch('https://craft-purse-backend.vercel.app/')
      .then(response => response.json())
      .then(data => setMaterials(data))
      .then(() => setLoading(false))
      .catch(error => { console.log(error) });
  }
 
  const materialsList = materials.map((material) => {
    return (
      <Material 
      key={material['_id']}
      name={material['name'] + ': '}
      quantity={material['quantity']}
      ></Material>)
  })
  return (
    <>
      <div className='container'>
        <div className='text-container'>
        <button disabled={loading} onClick={clickHandler}> Display Inventory </button>
        <ul>
          {materialsList}
        </ul>
        </div>
      </div>
    </>
  )
}

export default Materials;