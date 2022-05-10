import { useParams } from "react-router-dom";
import styled from "styled-components";


interface BoxProps {
  width?: number;
  height?: number;
};

const Box = styled.div<BoxProps>`
  width: 200;
  height: 200;
`;

function Coin() {
  const { coinId } = useParams();
  return (
    <div>
      <h1>Coin: {coinId}</h1>
      <Box></Box>
    </div>
  );
}

export default Coin;