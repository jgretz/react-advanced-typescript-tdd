interface HeadingProps {
  name: string;
}

function Heading({ name = "React" }: HeadingProps) {
  return <h1>Hello {name}</h1>;
}

export default Heading;
