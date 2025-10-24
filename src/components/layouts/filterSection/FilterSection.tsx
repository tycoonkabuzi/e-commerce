import styles from "./FilterSection.module.scss";
import { Icon } from "@iconify/react";
const FilterSection: React.FC = () => {
  return (
    <div className={styles.category}>
      <h2>Category</h2>
      <button className={styles.btn}>
        <Icon icon="line-md:folder-multiple-filled" width={20} height={20} />
        All products
        <div className={styles.btn_notification}>25</div>
        <Icon icon="ic:baseline-keyboard-arrow-up" width={20} height={20} />
      </button>
      <div className={styles.lines_hero}>
        <div className={styles.vertical_line}></div>

        <div className={styles.menu_list}>
          <div className={styles.item}>
            <div className={styles.horizontal_line}></div>
            <button>
              <Icon icon="ic:baseline-man" width={20} height={20} />
              For Men
            </button>
          </div>

          <div className={styles.item}>
            <div className={styles.horizontal_line}></div>
            <button>
              <Icon icon="ic:baseline-woman" width={20} height={20} />
              For Women
            </button>
          </div>

          <div className={styles.item}>
            <div className={`${styles.horizontal_line} `}></div>
            <button>
              <Icon
                icon="ic:baseline-electrical-services"
                width={20}
                height={20}
              />
              Electronics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
