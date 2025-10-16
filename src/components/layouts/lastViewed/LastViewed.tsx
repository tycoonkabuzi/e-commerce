import Menu from "../menu";
import styles from "./LastViewed.module.scss";
const LastViewed = () => {
  return (
    <div className={styles.lastViewed}>
      <Menu bigTitle={"Last Viewed"} smallTitle={"see more"}></Menu>
    </div>
  );
};
export default LastViewed;
