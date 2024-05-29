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
    <li>{props.name} {props.quantityLeft}
      <button onClick={onDelete}>Delete</button>
    </li>
    </>
  )
}

export default Material;