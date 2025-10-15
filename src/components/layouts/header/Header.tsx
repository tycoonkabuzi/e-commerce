import styles from "../header/Header.module.scss";
import headset from "../../../assets/images/blue-headsets.png";
import { Icon } from "@iconify/react";
const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div>
        <div
          className={`${styles.main_button_selection} ${styles.selected_item} `}
        >
          <span />
        </div>

        <div className={`${styles.main_button_selection} `}>
          <span />
        </div>

        <div className={`${styles.main_button_selection} `}>
          <span />
        </div>

        <div className={`${styles.main_button_selection} `}>
          <span />
        </div>
      </div>
      <div className={styles.shop_hero}>
        <h1>SHOP COMPUTERS & ACCESSORIES</h1>
        <p>
          Shop laptops. desktops. monitors. tablets. PC gaming. hard drives and
          storage, accessories and more
        </p>
        <button className={styles.btn}>View more</button>
      </div>
      <div className={styles.sample_product}>
        <div className={styles.text}>
          <p>Computer & accessories</p>
          <h2>JBL T460BT Black Headphones</h2>
          <div className={styles.stars}>
            <Icon icon="ic:baseline-star" width={20} height={20} />
            <Icon icon="ic:baseline-star" width={20} height={20} />
            <Icon icon="ic:baseline-star" width={20} height={20} />
            <Icon icon="ic:baseline-star" width={20} height={20} />
            <Icon icon="ic:baseline-star" width={20} height={20} />
          </div>
          <div className={styles.price}>
            <h3>$124.00</h3>
            <p>$250.00</p>
          </div>
          <div className={` ${styles.view_more} ${styles.small_paragraph} `}>
            View more
            <Icon icon="mdi-light:arrow-right" width={20} height={20} />
          </div>
        </div>
        <div className={styles.image}>
          <img src={headset} alt="headsets" />
        </div>
      </div>
    </div>
  );
};
export default Header;
