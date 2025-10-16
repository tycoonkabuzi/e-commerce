import styles from "./BannersSales.module.scss";
import pad from "../../../assets/images/pad.png";
import clock from "../../../assets/images/clock.png";
import { Icon } from "@iconify/react";

const BannerSales: React.FC = () => {
  return (
    <div className={styles.banner_hero}>
      <div className={styles.items}>
        <div>
          <h3>Amazon Basics</h3>
          <p>Shop Today's Deals, Lightsing Deals, and limited-time discounts</p>
          <p
            className={styles.small_paragraph}
            style={{ display: "flex", alignItems: "center" }}
          >
            See more
            <Icon icon="mdi-light:arrow-right" width={25} height={25} />
          </p>
        </div>
        <div className={styles.container_image}>
          <img src={pad} alt="Game pad" />
        </div>
      </div>

      <div className={styles.items}>
        <div>
          <h3>Deals & Promotions</h3>
          <p>Shop Today's Deals, Lightsing Deals, and limited-time discounts</p>
          <p
            className={styles.small_paragraph}
            style={{ display: "flex", alignItems: "center" }}
          >
            See more
            <Icon icon="mdi-light:arrow-right" width={25} height={25} />
          </p>
        </div>
        <div className={styles.container_image}>
          <img src={clock} alt="Game pad" />
        </div>
      </div>
    </div>
  );
};

export default BannerSales;
