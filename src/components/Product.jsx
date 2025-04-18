import { useState, useContext } from "react";
import { CartContext } from "../App";

import Button from "./Button";
import ProductDetails from "./ProductDetails";
import ProductPrice from "./ProductPrice";
import IncrementDecrementButton from "./IncDecButton";
import ProductImage from "./ProductImage";

const Product = ({ product }) => {
  const [count, setCount] = useState(0);
  const { dispatch } = useContext(CartContext);

  return (
    <div className="container grid grid--1x2">
      <ProductImage />
      <div className="details-wrapper">
        <ProductDetails product={product} />
        <ProductPrice product={product} />
        <div className="cs-buttons">
          <IncrementDecrementButton
            maxValue={product.inStock}
            count={count}
            setCount={setCount}
          />
          <Button
            name="Add to cart"
            iconName="cart"
            hasIcon="true"
            onClick={() => count>0 && 
              dispatch({
                type: "addToCart",
                item: {
                  product: product,
                  count: count,
                },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
