import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ price, description, star, img ,id}) {
  const [{basket}, dispatch] = useStateValue();
  console.log("this is the basket",basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id:id,
        description: description,
        img: img,
        price: price,
        star:star,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{description}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>{star}</p>
        </div>
      </div>
      <img src={img} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
