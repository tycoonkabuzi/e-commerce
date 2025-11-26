import styles from "./Footer.module.scss";
import logo from "../../../assets/icons/toni-light-blue-full.png";
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_wrap}>
        <div className={styles.image_container}>
          <img src={logo} alt="Logo Toni" />
        </div>
        <div className={styles.links_hero}>
          <div>
            <h1 className={styles.medium_title}>SHOP</h1>
            <ul>
              <li>All Collection</li>
              <li>Winter Edition</li>
              <li>Discount</li>
            </ul>
          </div>

          <div>
            <h1 className={styles.medium_title}>COMPANY</h1>
            <ul>
              <li>About Us</li>
              <li>Contact </li>
              <li>Affiliates</li>
            </ul>
          </div>

          <div>
            <h1 className={styles.medium_title}>SUPPORT</h1>
            <ul>
              <li>FAQs</li>
              <li>Cookies Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          <div>
            <h1 className={styles.medium_title}>PAYMENT METHOD</h1>
            <ul>
              <li>
                <Icon icon="logos:visa" width="48" />
              </li>
              <li>
                <Icon icon="logos:mastercard" width="30" />
              </li>

              <li>
                <Icon icon="logos:paypal" width="20" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>Copyright</p>
    </div>
  );
};

export default Footer;
