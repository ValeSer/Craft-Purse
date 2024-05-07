import './Material.css';
import React, { useState }from 'react';

const Material: React.FC = () => {
  const [materials, setMaterials] = useState([])

  const clickHandler = () => {
    fetch('https://craft-purse-backend.vercel.app/')
      .then(response => response.json())
      .then(data => setMaterials(data))
      .catch(error => { console.log(error) });
  }
  return (
    <>
      <div className='container'>
        <div className='text-container'>
        <button onClick={clickHandler}> Display Materials </button>
        <div> {materials[0] && materials[0].name}</div>
        </div>
      </div>
    </>
  )
}

export default Material;