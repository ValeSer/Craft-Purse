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
    <div>
      <span className='name'>{props.name}</span>
      <span className='quantity'>{props.quantityLeft}</span>
      <button className='delete-button'onClick={onDelete}>Delete</button>
    </div>
    </>
  )
}

export default Material;