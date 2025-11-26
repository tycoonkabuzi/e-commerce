import BannerSales from "../../layouts/bannerSales";
import Category from "../../layouts/categories";
import Header from "../../layouts/header";
import Nav from "../../layouts/nav";
import PersonalOffer from "../../layouts/personalOffer";
import ProductSection from "../../layouts/productSection";
import ReusableBanner from "../../layouts/reusableBanner";
import delivery from "../../../assets/images/delivery.png";
import woman from "../../../assets/images/woman.png";
import Footer from "../../layouts/footer";

const Home: React.FC = () => {
  const lastViewed = [
    {
      id: 1,
      image: { src: "/images/laptop.png", alt: "Laptop" },
      subtitle: "Electronics",
      title: "Dell XPS 13",
      price: "$999",
    },
    {
      id: 2,
      image: { src: "/images/headphones.png", alt: "Headphones" },
      subtitle: "Audio",
      title: "Sony WH-1000XM5",
      price: "$349",
    },
    {
      id: 3,
      image: { src: "/images/phone.png", alt: "Smartphone" },
      subtitle: "Mobiles",
      title: "iPhone 15 Pro",
      price: "$1099",
    },
    {
      id: 4,
      image: { src: "/images/watch.png", alt: "Smart Watch" },
      subtitle: "Wearables",
      title: "Apple Watch Series 9",
      price: "$399",
    },
    {
      id: 5,
      image: { src: "/images/tablet.png", alt: "Tablet" },
      subtitle: "Tablets",
      title: "iPad Air",
      price: "$599",
    },
  ];

  const topSellers = [
    {
      id: 1,
      image: { src: "/images/sneakers.png", alt: "Nike Air Max Sneakers" },
      subtitle: "Footwear",
      title: "Nike Air Max 270",
      price: "$149",
    },
    {
      id: 2,
      image: { src: "/images/smartwatch.png", alt: "Smart Watch" },
      subtitle: "Wearables",
      title: "Samsung Galaxy Watch 6",
      price: "$299",
    },
    {
      id: 3,
      image: { src: "/images/tv.png", alt: "4K Smart TV" },
      subtitle: "Home Entertainment",
      title: 'LG OLED 55" 4K TV',
      price: "$1199",
    },
    {
      id: 4,
      image: { src: "/images/blender.png", alt: "Blender" },
      subtitle: "Home Appliances",
      title: "NutriBullet Pro 900",
      price: "$129",
    },
    {
      id: 5,
      image: { src: "/images/camera.png", alt: "Camera" },
      subtitle: "Photography",
      title: "Canon EOS R7",
      price: "$1399",
    },
  ];

  const suggestions = [
    {
      id: 1,
      image: { src: "/images/speaker.png", alt: "Bluetooth Speaker" },
      subtitle: "Audio",
      title: "JBL Flip 6 Portable Speaker",
      price: "$129",
    },
    {
      id: 2,
      image: { src: "/images/laptop-stand.png", alt: "Laptop Stand" },
      subtitle: "Accessories",
      title: "Ergonomic Laptop Stand",
      price: "$39",
    },
    {
      id: 3,
      image: { src: "/images/mouse.png", alt: "Wireless Mouse" },
      subtitle: "Computer Peripherals",
      title: "Logitech MX Master 3S",
      price: "$99",
    },
    {
      id: 4,
      image: { src: "/images/powerbank.png", alt: "Power Bank" },
      subtitle: "Electronics",
      title: "Anker PowerCore 10000",
      price: "$59",
    },
    {
      id: 5,
      image: { src: "/images/keyboard.png", alt: "Mechanical Keyboard" },
      subtitle: "Computer Peripherals",
      title: "Keychron K6 Wireless Keyboard",
      price: "$89",
    },
  ];

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

      <ProductSection
        bigTitle={"Last viewed"}
        smallTitle={"see more"}
        cards={lastViewed}
      />
      <ProductSection
        bigTitle={"Toni Top sellers"}
        smallTitle={"see more"}
        cards={topSellers}
      />
      <ReusableBanner
        subtitle={"Discover Toni"}
        title={"SUBSCRIBE TO THE NEWS"}
        content={
          "Worldwide shipping. We ship to over 100 countries and regions, right to your doorstep."
        }
        button={"Subscribe"}
        image={{ src: woman, alt: "A woman smilling wearing orange" }}
      />
      <ProductSection
        bigTitle={"Tomasz, this is your must to have "}
        smallTitle={"see more"}
        cards={suggestions}
      />
      <Footer />
    </>
  );
};
export default Home;
