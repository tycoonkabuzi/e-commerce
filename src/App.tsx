import "./styles/main.scss";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import { Route, Routes } from "react-router-dom";
import ShoppingCard from "./components/layouts/shoppingCard/ShoppingCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="card" element={<ShoppingCard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
