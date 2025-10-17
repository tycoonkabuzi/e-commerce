import CardText from "../cardText";
import Menu from "../menu";
import styles from "./LastViewed.module.scss";
import airforce from "../../../assets/images/custom-nike-air-force-1-low-by-you-shoes.png";

const LastViewed = () => {
  return (
    <div className={styles.lastViewed}>
      <Menu bigTitle={"Last Viewed"} smallTitle={"see more"} />
      <div className={styles.container_items}>
        <div className={styles.item}>
          <div>
            <img src={airforce} alt="nike air force" />
          </div>
          <CardText
            subtitle={"Ship to Poland"}
            title={"Nike Airman light"}
            price={"$150"}
          />
        </div>

        <div className={styles.item}>
          <div>
            <img src={airforce} alt="nike air force" />
          </div>
          <CardText
            subtitle={"Ship to Poland"}
            title={"Nike Airman light"}
            price={"$150"}
          />
        </div>
        <div className={styles.item}>
          <div>
            <img src={airforce} alt="nike air force" />
          </div>
          <CardText
            subtitle={"Ship to Poland"}
            title={"Nike Airman light"}
            price={"$150"}
          />
        </div>
        <div className={styles.item}>
          <div>
            <img src={airforce} alt="nike air force" />
          </div>
          <CardText
            subtitle={"Ship to Poland"}
            title={"Nike Airman light"}
            price={"$150"}
          />
        </div>
        <div className={styles.item}>
          <div>
            <img src={airforce} alt="nike air force" />
          </div>
          <CardText
            subtitle={"Ship to Poland"}
            title={"Nike Airman light"}
            price={"$150"}
          />
        </div>
      </div>
    </div>
  );
};
export default LastViewed;
