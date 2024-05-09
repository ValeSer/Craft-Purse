interface MaterialProps {
  name: string;
  quantityLeft: number;

}

const Material = (props: MaterialProps) => {

  return (
    <>
    <li>{props.name} {props.quantityLeft}</li>
    </>
  )
}

export default Material;