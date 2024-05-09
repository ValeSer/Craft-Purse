interface MaterialProps {
  name: string;
  quantity: number;

}

const Material = (props: MaterialProps) => {

  return (
    <>
    <li>{props.name} {props.quantity}</li>
    </>
  )
}

export default Material;