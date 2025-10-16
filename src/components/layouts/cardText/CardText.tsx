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
      <p>{subtitle}</p>
      <h2>{title}</h2>
      <div className={styles.stars}>
        <Icon icon="ic:baseline-star" width={20} height={20} />
        <Icon icon="ic:baseline-star" width={20} height={20} />
        <Icon icon="ic:baseline-star" width={20} height={20} />
        <Icon icon="ic:baseline-star" width={20} height={20} />
        <Icon icon="ic:baseline-star" width={20} height={20} />
      </div>
      <div className={styles.price}>
        <h3>{price}</h3>
        <p>{previousPrice}</p>
      </div>
      <div className={` ${styles.view_more} ${styles.small_paragraph} `}>
        View more
        <Icon icon="mdi-light:arrow-right" width={20} height={20} />
      </div>
    </div>
  );
};

export default CardText;
