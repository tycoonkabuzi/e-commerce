import styles from "../header/Header.module.scss";
import headset from "../../../assets/images/blue-headsets.png";
import CardText from "../cardText";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [current, setCurrent] = useState("first");

  const moveHeader = (current: string): void => {
    setCurrent(current);
  };
  const changeRadioButton = () => {
    const options = ["first", "second", "third", "fourth"];
    let index = options.indexOf(current);
    let interval = setInterval(() => {
      index++;
      setCurrent(options[index]);

      if (index === options.length) {
        index = 0;
      }
      console.log(`This is the current ${options.indexOf(current)}`);
    }, 5000);
    return interval;
  };
  useEffect(() => {
    changeRadioButton();
  }, []);
  return (
    <div
      className={`${styles.header_hero} ${
        current === "first" ? styles.header_moved_up : ""
      } `}
    >
      <div className={styles.radio_button}>
        <div
          className={`${styles.main_button_selection} ${
            current === "first" ? styles.selected_item : ""
          } `}
          onClick={() => moveHeader("first")}
        >
          <span />
        </div>
        <div
          className={`${styles.main_button_selection} ${
            current === "second" ? styles.selected_item : ""
          } `}
          onClick={() => moveHeader("second")}
        >
          <span />
        </div>

        <div
          className={`${styles.main_button_selection} ${
            current === "third" ? styles.selected_item : ""
          } `}
          onClick={() => moveHeader("third")}
        >
          <span />
        </div>

        <div
          className={`${styles.main_button_selection} ${
            current === "fourth" ? styles.selected_item : ""
          } `}
          onClick={() => moveHeader("fourth")}
        >
          <span />
        </div>
      </div>

      <div
        className={`${styles.container_header} ${
          current === "first"
            ? ""
            : current === "second"
            ? styles.header_moved_up
            : current == "third"
            ? styles.header_moved_more
            : current == "fourth"
            ? styles.header_moved_top
            : ""
        }`}
      >
        <div className={styles.header}>
          <div className={styles.shop_hero}>
            <h1>SHOP COMPUTERS & ACCESSORIES 1</h1>
            <p>
              Shop laptops. desktops. monitors. tablets. PC gaming. hard drives
              and storage, accessories and more
            </p>
            <button className={styles.btn}>View more</button>
          </div>
          <div className={styles.sample_product}>
            <CardText
              subtitle={"Computer & accessories"}
              title={"JBL T460BT Black Headphones"}
              price={"$124.00"}
              previousPrice={"$250.00"}
              button={"View more"}
            />
            <div className={styles.image}>
              <img src={headset} alt="headsets" />
            </div>
          </div>
        </div>

        <div className={styles.header} style={{ backgroundColor: "white" }}>
          <div className={styles.shop_hero}>
            <h1>SHOP COMPUTERS & ACCESSORIES 2</h1>
            <p>
              Shop laptops. desktops. monitors. tablets. PC gaming. hard drives
              and storage, accessories and more
            </p>
            <button className={styles.btn}>View more</button>
          </div>
          <div className={styles.sample_product}>
            <CardText
              subtitle={"Computer & accessories"}
              title={"JBL T460BT Black Headphones"}
              price={"$124.00"}
              previousPrice={"$250.00"}
              button={"View more"}
            />
            <div className={styles.image}>
              <img src={headset} alt="headsets" />
            </div>
          </div>
        </div>

        <div className={styles.header} style={{ backgroundColor: "green" }}>
          <div className={styles.shop_hero}>
            <h1>SHOP COMPUTERS & ACCESSORIES 3</h1>
            <p>
              Shop laptops. desktops. monitors. tablets. PC gaming. hard drives
              and storage, accessories and more
            </p>
            <button className={styles.btn}>View more</button>
          </div>
          <div className={styles.sample_product}>
            <CardText
              subtitle={"Computer & accessories"}
              title={"JBL T460BT Black Headphones"}
              price={"$124.00"}
              previousPrice={"$250.00"}
              button={"View more"}
            />
            <div className={styles.image}>
              <img src={headset} alt="headsets" />
            </div>
          </div>
        </div>

        <div className={styles.header} style={{ backgroundColor: "gray" }}>
          <div className={styles.shop_hero}>
            <h1>SHOP COMPUTERS & ACCESSORIES 4</h1>
            <p>
              Shop laptops. desktops. monitors. tablets. PC gaming. hard drives
              and storage, accessories and more
            </p>
            <button className={styles.btn}>View more</button>
          </div>
          <div className={styles.sample_product}>
            <CardText
              subtitle={"Computer & accessories"}
              title={"JBL T460BT Black Headphones"}
              price={"$124.00"}
              previousPrice={"$250.00"}
              button={"View more"}
            />
            <div className={styles.image}>
              <img src={headset} alt="headsets" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
