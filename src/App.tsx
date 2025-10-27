import "./App.css";
import FilterSection from "./components/layouts/filterSection";
import HeaderWithSearch from "./components/layouts/headerWithSearch";
import Nav from "./components/layouts/nav";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Nav />
      <HeaderWithSearch />
      <FilterSection />
    </>
  );
}

export default App;
