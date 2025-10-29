import styles from "./NewsLetter.module.scss";
import { Icon } from "@iconify/react";

const NewsLetter: React.FC = () => {
  return (
    <div className={styles.newsLetter}>
      <h3 className={styles.big_title}>
        Subscribe to our news letter to get updates of new products
      </h3>
      <p>
        Get 20% off on your first order just by subscribing to our news letter{" "}
      </p>
      <form action="" className={styles.form}>
        <div className={styles.input_wrapper}>
          <Icon
            className={styles.search_icon}
            icon="ri:mail-line"
            width={20}
            height={20}
          />
          <input type="text" placeholder="Subscribe to our news letter " />
          <button className={styles.btn_primary}>Subscribe</button>
        </div>
      </form>
      <p className={`${styles.subscribe_text}  ${styles.small_paragraph}`}>
        You will be able to unsubscribe at any time read our privacy policy
        <a href=""> here</a>
      </p>
    </div>
  );
};

export default NewsLetter;
