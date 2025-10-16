import styles from "./CardText.module.scss";
import { Icon } from "@iconify/react";
const CardText = ({
  subtitle,
  title,
  price,
  previousPrice,
}: {
  subtitle: string;
  title: string;
  price: string;
  previousPrice: string;
}) => {
  return (
    <div className={styles.text}>
      <p>Computer & accessories{subtitle}</p>
      <h2>JBL T460BT Black Headphones{title}</h2>
      <div className={styles.stars}>
        <Icon icon="ic:baseline-star" width={20} height={20} />
        <Icon icon="ic:baseline-star" width={20} height={20} />
        <Icon icon="ic:baseline-star" width={20} height={20} />
        <Icon icon="ic:baseline-star" width={20} height={20} />
        <Icon icon="ic:baseline-star" width={20} height={20} />
      </div>
      <div className={styles.price}>
        <h3>$124.00{price}</h3>
        <p>$250.00{previousPrice}</p>
      </div>
      <div className={` ${styles.view_more} ${styles.small_paragraph} `}>
        View more
        <Icon icon="mdi-light:arrow-right" width={20} height={20} />
      </div>
    </div>
  );
};

export default CardText;
