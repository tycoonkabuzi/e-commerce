import { useEffect, useState } from "react";
import style from "./ShoppingCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../../redux/slices/cardSlice";
const ShoppingCard = () => {
  const items = useSelector((state) => state.card.items);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState({});

  useEffect(() => {
    const calculateTotal = () => {
      const total = items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);

      const tva = Math.floor((total * 16) / 100);
      setTotalPrice({
        subTotal: total,
        tva: tva,
        total: Math.floor(total + tva),
      });
    };
    calculateTotal();
  }, [items]);
  return (
    <div className={style.card}>
      <h1>Your card</h1>
      {items
        ? items.map((item) => (
            <div key={item.id} className={style.cardItem}>
              <div className={style.cardImage}>
                <img src={item.thumbnail} />
              </div>
              <div className={style.text}>
                <h2> {item.title}</h2>
                <p> {item.price}$</p>
              </div>
              <div>
                <button
                  className={style.cardButton}
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className={style.cardButton}
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>
            </div>
          ))
        : ""}

      {totalPrice.total > 0 ? (
        <div className={style.total}>
          <p>subTotal:{totalPrice.subTotal} $ </p>
          <p>tax: {totalPrice.tva}$</p>
          <p>total: {totalPrice.total}$</p>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>Your card is currently empty</p>
      )}
    </div>
  );
};

export default ShoppingCard;
