import React, { useState } from 'react'
import "./Product.css";
import GradeIcon from '@material-ui/icons/Grade';
import CheckIcon from '@material-ui/icons/Check';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    
    const[{basket}, dispatch] = useStateValue();
    const [atbMessage, setAtbMessage] = useState(false)

    const addToBasket = (e) => {
        setAtbMessage(true);
        //dispatch the item to the datalayer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image:image,
                price:price, 
                rating: rating,
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product_price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p><GradeIcon /></p>
                    ))}
                </div>
            </div>
            <img className="product__image" src={image}/>
            <p className={atbMessage ? "product__atbConfirmation active" : "product__atbConfirmation"}><i></i>Added to basket</p>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
