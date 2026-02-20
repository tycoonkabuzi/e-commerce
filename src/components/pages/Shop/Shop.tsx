import Card from "../../layouts/card";
import FilterSection from "../../layouts/filterSection";
import HeaderWithSearch from "../../layouts/headerWithSearch";
import styles from "./Shop.module.scss";
import NewsLetter from "../../layouts/newsletter";
import Footer from "../../layouts/footer";

const Shop: React.FC = () => {
  return (
    <>
      <div className={styles.shop}>
        <HeaderWithSearch />
        <div className={styles.section_shop}>
          <FilterSection />
          <div className={styles.cards}>
            <Card />
          </div>
        </div>
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};
export default Shop;
