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
    <div>{props.name} {props.quantityLeft}
      <button onClick={onDelete}>Delete</button>
    </div>
    </>
  )
}

export default Material;