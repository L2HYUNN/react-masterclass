import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    font-size: 25px;
    background-color: ${props => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${props => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>HELLO</Title>
    </Wrapper>
  )
}

export default App;
