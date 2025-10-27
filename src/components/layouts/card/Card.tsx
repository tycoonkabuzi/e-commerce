import styles from "./Card.module.scss";
import CardText from "../cardText";

const Card: React.FC = () => {
  return (
    <div>
      <CardText subtitle="Reviewed" title="Iphone 15 pro" price="$200" />
      <div>
        <button className={styles.btn_secondary}>Add to Chart</button>
        <button className={styles.btn_primary}>Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
