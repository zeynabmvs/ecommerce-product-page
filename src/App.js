import Header from "./components/header/Header";
import Button from "./components/Button";
import ProductDetails from "./components/ProductDetails";
import ProductPrice from "./components/ProductPrice";
import IncrementDecrementButton from "./components/IncDecButton";
import ProductImage from "./components/ProductImage";
import { product } from "./utils/data";
import React, { useState, useReducer, createContext } from "react";
import cartReducer from "./reducer";

export const CartContext = createContext();

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [count, setCount] = useState(1);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <div className="App">
        <Header />
        <main className="container grid grid--1x2">
          <ProductImage />

          <div>
            <ProductDetails
              title={"Sneaker company"}
              heading={"Fall limited edition sneakers"}
              content={
                "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer"
              }
            />
            <ProductPrice
              current={"$123"}
              percentage={"50%"}
              previous={"$250"}
            />
            <div className="cs-buttons">
              <IncrementDecrementButton
                maxValue={"10"}
                count={count}
                setCount={setCount}
              />
              <Button
                name="Add to cart"
                onClick={() =>
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
        </main>
      </div>
    </CartContext.Provider>
  );
}

export default App;
