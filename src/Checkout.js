import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__image"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h3>Hello, {user.email}</h3>
          <h2 className="checkout__tittle">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              price={item.price}
              img={item.img}
              description={item.description}
              star={item.star}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
