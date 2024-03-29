import React, { useState } from "react";
import styles from "./Card.module.scss";

function Card({ title, imageUrl, price, onClickFavorite, onClickPlus }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleClickPlus = () => {
    onClickPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={handleClickPlus}
          src={isAdded ? "/img/btn-done.svg" : "/img/plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
