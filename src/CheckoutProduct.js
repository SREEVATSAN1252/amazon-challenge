import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';
function CheckoutProduct({id,img,description,price,star}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = (basket)=>{ dispatch({
        type: "REMOVE_FROM_BASKET",
       
          id:id,
          
        
      });
    };
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={img}/>
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__tittle'>
                {description}
            </p>
            <div className='checkoutProduct__rating'> {star}</div>
            <p className='checkoutProduct__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <button onClick={removeFromBasket} >Remove from Basket</button>
        </div>





    </div>
  )
}

export default CheckoutProduct