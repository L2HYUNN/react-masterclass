import { useParams } from "react-router-dom";

function Coin() {
  const { coinIds } = useParams();
  return <h1>Coin: {coinIds}</h1>;
}

export default Coin;