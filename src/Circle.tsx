import { useState } from "react";
import styled from "styled-components"


interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${props => props.borderColor};
`;

interface CircleProps {
  bgColor: string;  
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "Hello" }: CircleProps) {
  const [value, setValue] = useState<number | string>(0);
  setValue("Hello");
  return (
    <Container bgColor={ bgColor } borderColor={ borderColor ?? bgColor }>
      {text}
    </Container>
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