import "./App.css";
import ReusableBanner from "./components/layouts/reusableBanner";
import BannerSales from "./components/layouts/bannerSales";
import Category from "./components/layouts/categories";
import Header from "./components/layouts/header";
import LastViewed from "./components/layouts/lastViewed";
import Nav from "./components/layouts/nav";
import PersonalOffer from "./components/layouts/personalOffer";
import delivery from "./assets/images/delivery.png";
import woman from "./assets/images/woman.png";
function App() {
  return (
    <>
      <Nav />
      <Header />
      <PersonalOffer />
      <Category />
      <BannerSales />
      <ReusableBanner
        subtitle={"Discover Toni"}
        title={"TONI DELIVERS TO YOU"}
        content={
          "Worldwide shipping. We ship to over 100 countries and regions, right to your doorstep."
        }
        button={"View more"}
        image={{ src: delivery, alt: "A delivery guy on a bike " }}
      />

      <LastViewed />

      <ReusableBanner
        subtitle={"Discover Toni"}
        title={"SUBSCRIBE TO THE NEWS"}
        content={
          "Worldwide shipping. We ship to over 100 countries and regions, right to your doorstep."
        }
        button={"Subscribe"}
        image={{ src: woman, alt: "A woman smilling wearing orange" }}
      />
    </>
  );
}

export default App;
