import "./App.css";
import Card from "./components/layouts/card";
import FilterSection from "./components/layouts/filterSection";
import HeaderWithSearch from "./components/layouts/headerWithSearch";
import Nav from "./components/layouts/nav";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Nav />
      <HeaderWithSearch />

      <div>
        <FilterSection />
        <Card />
      </div>
    </>
  );
}

export default App;
