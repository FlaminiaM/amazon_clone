import React from 'react';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from "./reducer";


function SubtotalAmount() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <React.Fragment>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong> {`${value}`}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={0}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
        </React.Fragment>
    )
}

export default SubtotalAmount
