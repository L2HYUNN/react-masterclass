import {BrowserRouter as Routers, Route, Routes} from "react-router-dom";
import Coin from "./coin";
import Coins from "./coins";

function Router() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Coins/>}></Route>
        <Route path="/:coinId" element={<Coin/>}></Route>
      </Routes>
    </Routers>
  )

}

export default Router;