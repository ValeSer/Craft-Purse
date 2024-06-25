import EditMaterial from '../EditMaterial/EditMaterial';
import './Material.css'
import {useState} from 'react'

interface MaterialProps {
  _id: string;
  name: string;
  quantityLeft: number;

}

const Material = (props: MaterialProps) => {
  const[isEditing, setIsEditing] = useState(false)

  const onDelete = () => {
    fetch(import.meta.env.VITE_BACKEND_URL + `/material/${props._id}`, {
      method: "DELETE"
    } )
      .then(() => {console.log('deleted')}) 
  }

  const editToggle = () => {
    setIsEditing(!isEditing)
  }



  return (
    <>
    {!isEditing && (<div className='row-material'>
      <div className='name'>{props.name.slice(0,1).toUpperCase()+props.name.slice(1)}</div>
      <div className='quantity'>{props.quantityLeft}</div>
      <button className='edit-toggle' onClick={editToggle}>Edit</button>
      <button className='delete-button'onClick={onDelete}>Delete</button>
    </div>)}
    {isEditing && (<EditMaterial 
        _id={props._id} 
        name={props.name} 
        quantityLeft={props.quantityLeft}
        onCancel={editToggle}
        >
      </EditMaterial>)}
    </>
  )
}

export default Material;