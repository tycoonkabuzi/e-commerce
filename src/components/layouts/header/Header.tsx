import styles from "../header/Header.module.scss";
import headset from "../../../assets/images/blue-headsets.png";
import CardText from "../cardText";

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
        <CardText
          subtitle={"Computer & accessories"}
          title={"JBL T460BT Black Headphones"}
          price={"$124.00"}
          previousPrice={"$250.00"}
        />
        <div className={styles.image}>
          <img src={headset} alt="headsets" />
        </div>
      </div>
    </div>
  );
};
export default Header;
