import Card from "../../layouts/card";
import FilterSection from "../../layouts/filterSection";
import HeaderWithSearch from "../../layouts/headerWithSearch";
import styles from "./Shop.module.scss";
import Nav from "../../layouts/nav";

const Shop: React.FC = () => {
  return (
    <>
      <Nav />
      <div className={styles.shop}>
        <HeaderWithSearch />

        <div className={styles.section_shop}>
          <FilterSection />
          <div className={styles.cards}>
            <Card /> <Card /> <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
