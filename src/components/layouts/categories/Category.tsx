import styles from "./Category.module.scss";

import computer from "../../../assets/images/computer.png";
import toys from "../../../assets/images/toys.png";
import beauty from "../../../assets/images/beauty.png";
import Menu from "../menu";
const Category: React.FC = () => {
  return (
    <div className={styles.categories}>
      <Menu bigTitle={"Shop by categories"} smallTitle={" All departments"} />
      <div className={styles.items_hero}>
        <div className={styles.item}>
          <div className={styles.container_image}>
            <img src={computer} alt="Macbook computer" />
          </div>

          <h3>Computer & Accessories</h3>
        </div>

        <div className={styles.item}>
          <div className={styles.container_image}>
            <img src={toys} alt="teddy ber" />
          </div>
          <h3>Toys & Ganes</h3>
        </div>

        <div className={styles.item}>
          <div className={styles.container_image}>
            <img src={computer} alt="Lotion" />
          </div>
          <h3>Fashion</h3>
        </div>
        <div className={styles.item}>
          <div className={styles.container_image}>
            <img src={beauty} alt="black woman with a leaf" />
          </div>
          <h3>Beauty picks</h3>
        </div>
      </div>
    </div>
  );
};

export default Category;
