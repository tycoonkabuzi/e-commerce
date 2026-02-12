import image from "../../../assets/images/box.png";
import style from "./ShoppingCard.module.scss";

const ShoppingCard = () => {
  return (
    <div className={style.card}>
      <h1>Your card</h1>
      <div className={style.cardItem}>
        <div className={style.cardImage}>
          <img src={image} />
        </div>
        <div className={style.text}>
          <h2> Chapka</h2>
          <p> 2.50$</p>
        </div>
        <div>
          <button className={style.cardButton}>-</button> 1
          <button className={style.cardButton}>+</button>
        </div>
      </div>

      <div className={style.cardItem}>
        <div className={style.cardImage}>
          <img src={image} />
        </div>
        <div className={style.text}>
          <h2> Chapka</h2>
          <p> 2.50$</p>
        </div>
        <div>
          <button className={style.cardButton}>-</button> 1
          <button className={style.cardButton}>+</button>
        </div>
      </div>

      <div className={style.cardItem}>
        <div className={style.cardImage}>
          <img src={image} />
        </div>
        <div className={style.text}>
          <h2> Chapka</h2>
          <p> 2.50$</p>
        </div>
        <div>
          <button className={style.cardButton}>-</button> 1
          <button className={style.cardButton}>+</button>
        </div>
      </div>

      <div className={style.total}>
        <p>subTotal: 200$</p>
        <p>tax: 11$</p>
        <p>total: 211$</p>
      </div>
    </div>
  );
};

export default ShoppingCard;
