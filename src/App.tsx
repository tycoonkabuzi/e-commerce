import "./styles/main.scss";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/layouts/nav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
