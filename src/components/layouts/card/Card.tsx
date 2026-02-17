import styles from "./Card.module.scss";
import CardText from "../cardText";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../../../redux/slices/cardSlice.jsx";
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

  const dispatch = useDispatch();

  // map data from the api
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
              <button
                className={styles.btn_secondary}
                onClick={() => dispatch(addToCard(product))}
              >
                Add to Chart
              </button>
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
