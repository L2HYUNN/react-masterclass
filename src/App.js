import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Title = styled.h1`
  font-size: 30px;
  color: aliceblue;
`;
const Title2 = styled.h1`
  font-size: 30px;
  color: aliceblue;
`;
const Title3 = styled.h1`
  font-size: 30px;
  color: aliceblue;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
