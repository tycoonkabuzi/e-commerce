import styles from "./BannerDelivery.module.scss";
import delivery from "../../../assets/images/delivery.png";
const BannerDelivery: React.FC = () => {
  return (
    <div className={styles.banner_delivery}>
      <div>
        <p className={styles.small_paragraph}>Discover Toni</p>
        <h1> TONI DELIVERS TO YOU </h1>
        <p>
          Worldwide shipping. We ship to over 100 countries and regions, right
          to your doorstep.
        </p>
        <button className={styles.btn}> View more</button>
      </div>

      <div className={styles.container_image}>
        <img src={delivery} alt="Delivery guy wearing orange on a bike" />
      </div>
    </div>
  );
};

export default BannerDelivery;
