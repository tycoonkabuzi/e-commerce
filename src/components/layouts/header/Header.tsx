import styles from "../header/Header.module.scss";
import headset from "../../../assets/images/blue-headsets.png";
const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div>
        <span>.</span>
        <span>.</span>
        <span>.</span>
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
          <div>stars</div>
          <div className={styles.price}>
            <h3>$124.00</h3>
            <p>$250.00</p>
          </div>
          <button>view more</button>
        </div>
        <div className={styles.image}>
          <img src={headset} alt="headsets" />
        </div>
      </div>
    </div>
  );
};
export default Header;
