import styled from "styled-components";
import { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 2s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
    &:active {
      opactiy: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>Hi</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
