import { useState } from "react";
import style from "./ShoppingCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../../redux/slices/cardSlice";
const ShoppingCard = () => {
  const items = useSelector((state) => state.card.items);
  const dispatch = useDispatch();
  console.log(items);
  return (
    <div className={style.card}>
      <h1>Your card</h1>
      {items
        ? items.map((item) => (
            <div className={style.cardItem}>
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
      <div className={style.total}>
        <p>subTotal: 200$</p>
        <p>tax: 11$</p>
        <p>total: 211$</p>
      </div>
    </div>
  );
};

export default ShoppingCard;
