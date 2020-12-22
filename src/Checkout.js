import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import SubtotalAmount from './SubtotalAmount';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
                <div className="checkout__productContainer">
                    <h1 className="checkout__title">
                        {basket.length === 0 ? "Your Amazon Basket is empty." : "Shopping Basket"}
                    </h1>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating= {item.rating}
                        />
                    ))}
                    {basket.length > 0 ? <div className="checkout__subtotalAmount"><SubtotalAmount /></div> : null}                    
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
