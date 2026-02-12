import styles from "./Card.module.scss";
import CardText from "../cardText";
import image from "../../../assets/images/testImage.jpg";
import { useEffect, useState } from "react";

const Card: React.FC = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      {data?.products ? (
        data.products.map((product) => (
          <div className={styles.card}>
            <div className={styles.card_image}>
              <img src={product.thumbnail} alt="" />
            </div>
            <CardText
              subtitle="Reviewed"
              title={product.title}
              price={`${product.price} $`}
            />
            <div className={styles.button_hero}>
              <button className={styles.btn_secondary}>Add to Chart</button>
              <button className={styles.btn_primary}>Buy Now</button>
            </div>
          </div>
        ))
      ) : (
        <p> Loading </p>
      )}
    </>
  );
};

export default Card;
