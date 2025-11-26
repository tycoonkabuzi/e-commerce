import { Icon } from "@iconify/react";
import styles from "./Menu.module.scss";

const Menu = ({
  bigTitle,
  smallTitle,
}: {
  bigTitle: string;
  smallTitle?: string;
}) => {
  return (
    <div className={styles.titles}>
      <h3> {bigTitle}</h3>
      <h3 className={styles.small_paragraph} style={{ display: "flex" }}>
        {smallTitle}
        <Icon icon="mdi-light:arrow-right" width={25} height={25} />{" "}
      </h3>
    </div>
  );
};
export default Menu;
