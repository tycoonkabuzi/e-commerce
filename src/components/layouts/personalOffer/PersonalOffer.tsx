import styles from "../personalOffer/PersonalOffer.module.scss";
import profilePicture from "../../../assets/images/profile-picture.jpg";
import box from "../../../assets/images/box.png";
import headsets from "../../../assets/images/headsets.png";
import cloth from "../../../assets/images/cloth.png";

const PersonalOffer: React.FC = () => {
  return (
    <div className={styles.section}>
      <div className={styles.profile_hero}>
        <div className={styles.profile}>
          <img src={profilePicture} alt="A man laughing" />
        </div>

        <p className={styles.big_paragraph}>
          Hi, <span style={{ fontWeight: "500" }}>Tomas</span> recommendations
          for you
        </p>
      </div>

      <div className={styles.options_hero}>
        <div className={styles.option_item}>
          <div className={styles.option_image}>
            <img src={box} alt="carton box" />
          </div>
          <div className={styles.option_text}>
            <h3>Your Orders </h3>
            <p className={styles.small_paragraph}>view your orders</p>
          </div>
        </div>

        <div className={styles.option_item}>
          <div className={styles.option_image}>
            <img src={headsets} alt="headsets" />
          </div>
          <div className={styles.option_text}>
            <h3>Your Orders </h3>
            <p className={styles.small_paragraph}>view your orders</p>
          </div>
        </div>

        <div className={styles.option_item}>
          <div className={styles.option_image}>
            <img src={cloth} alt="blue shirt" />
          </div>
          <div className={styles.option_text}>
            <h3>Your Orders </h3>
            <p className={styles.small_paragraph}>view your orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalOffer;
