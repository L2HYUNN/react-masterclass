import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Chart from "./Chart";
import Coin from "./Coin";
import Coins from "./Coins";
import Price from "./Price";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Coins toggleDark={toggleDark} />}></Route>
        <Route path="/:coinId" element={<Coin isDark={isDark} />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </Routers>
  );
}

export default Router;
