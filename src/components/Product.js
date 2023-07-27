import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import toast, { Toaster } from 'react-hot-toast';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //console.log(basket);
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast.success('Successfully Added item to the cart!', {
      position: 'top-right',
    });

  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      {/* add handleadd to basket */}
      <button onClick={addToBasket}>Add to Basket</button>
      <Toaster
        containerStyle={{
          top: 100,
          right: 20,
        }} />
    </div>
  );
}

export default Product;
