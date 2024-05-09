interface MaterialProps {
  name: string;
}

const Material = (props: MaterialProps) => {

  return (
    <>
    <li>{props.name}</li>
    </>
  )
}

export default Material;