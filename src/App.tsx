import "./App.css";
import BannerDelivery from "./components/layouts/bannerDelivery";
import BannerSales from "./components/layouts/bannerSales";
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
      <BannerSales />
      <BannerDelivery />
    </>
  );
}

export default App;
