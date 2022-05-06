import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};

`;

const Title = styled.h1<TitleProps>`
  color: ${props => props.theme.textColor};
  font-size: 36px;
  background-color: ${props => props.backgroundColor};
`;

interface ContentProps {
  text: string;
  color?: string;
  backgroundColor?: string; 
}

interface TitleProps {
  color?: string;
  backgroundColor?: string; 
}

function Contents({text, color}: ContentProps) {
  return (
    <Title backgroundColor={color}>{text}</Title>
  );
}

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  const { currentTarget: { value } } = event;
  setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello", value);
  };
  return (
    <Container>
      <Title>Hello</Title>
      <Contents text="Hello" color="tomato"></Contents>
      <div>
        <form onSubmit={onSubmit}>
          <input value={value} onChange={onChange} type="text" placeholder="username"/>
          <button>Log In</button>
        </form>
      </div>
    </Container>

  )
}

export default App;
