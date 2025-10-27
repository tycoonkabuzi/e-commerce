import { Icon } from "@iconify/react";
import styles from "./HeaderWithSearch.module.scss";

const HeaderWithSearch: React.FC = () => {
  return (
    <div className={styles.header_hero}>
      <h1 className={styles.big_title}>Get all you need </h1>
      <form action="" className={styles.form}>
        <div className={styles.input_wrapper}>
          <Icon
            className={styles.search_icon}
            icon="ri:search-2-line"
            width={20}
            height={20}
          />
          <input type="text" placeholder="search on toni " />
          <button className={styles.btn_primary}>search</button>
        </div>
      </form>
    </div>
  );
};

export default HeaderWithSearch;
