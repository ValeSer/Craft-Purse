import './Material.css'

interface MaterialProps {
  _id: string;
  name: string;
  quantityLeft: number;

}

const Material = (props: MaterialProps) => {
  const onDelete = () => {
    fetch(import.meta.env.VITE_BACKEND_URL + `/material/${props._id}`, {
      method: "DELETE"
    } )
      .then(() => {console.log('deleted')})
    
  }

  return (
    <>
    <div className='row-material'>
      <div className='name'>{props.name.slice(0,1).toUpperCase()+props.name.slice(1)}</div>
      <div className='quantity'>{props.quantityLeft}</div>
      <button className='delete-button'onClick={onDelete}>Delete</button>
    </div>
    </>
  )
}

export default Material;