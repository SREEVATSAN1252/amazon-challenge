import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { basketTotal } from "./Reducer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const history = useHistory(); 

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={e=>history.push("/payment")}>Proceed to Payment</button>
    </div>
  );
}

export default Subtotal;