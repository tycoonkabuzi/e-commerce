import styles from "./Card.module.scss";
import CardText from "../cardText";
import image from "../../../assets/images/testImage.jpg";

const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img src={image} alt="" />
      </div>
      <CardText subtitle="Reviewed" title="Iphone 15 pro" price="$200" />
      <div className={styles.button_hero}>
        <button className={styles.btn_secondary}>Add to Chart</button>
        <button className={styles.btn_primary}>Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
