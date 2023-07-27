import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import { Toaster, toast } from 'react-hot-toast';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
        toast.success('Successfully Removed item from the cart!', {
            position: 'top-right',
        });
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt='singleproduct' />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
                {!hideButton && (
                    // add removeFromBasket function here
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
                <Toaster
                    containerStyle={{
                        top: 100,
                        right: 20,
                    }} />
            </div>
        </div>
    )
}

export default CheckoutProduct
