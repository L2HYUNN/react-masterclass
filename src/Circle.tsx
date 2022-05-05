import styled from "styled-components"


interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;  
}

function Circle({ bgColor }: CircleProps) {
  return (
    <Container bgColor={ bgColor }></Container>
  );
}

interface PlayerShape {
  name: string;
  age: string;
}

const sayHello = (palyerObj: PlayerShape) => {
  return `Hello ${palyerObj.name} you are ${palyerObj.age} years old.`;
}

sayHello({name: "nice", age: "24"});

export default Circle;