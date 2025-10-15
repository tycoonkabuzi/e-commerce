import "./App.css";
import Category from "./components/layouts/categories";
import Header from "./components/layouts/header";
import Nav from "./components/layouts/nav";
import PersonalOffer from "./components/layouts/personalOffer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <PersonalOffer />
      <Category />
    </>
  );
}

export default App;
