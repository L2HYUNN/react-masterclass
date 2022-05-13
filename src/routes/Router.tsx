import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Chart from "./Chart";
import Coin from "./coin";
import Coins from "./coins";
import Price from "./Price";

function Router() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </Routers>
  );
}

export default Router;
