import React from "react";
import "./Subtotal.css";

import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";
import { NumericFormat } from 'react-number-format';
function Subtotal() {

    const navigate = useNavigate();

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <NumericFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Make this dynamic*/}
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
