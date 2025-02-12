import Header from "./components/header/Header";
import Button from "./components/Button";
import ProductDetails from "./components/ProductDetails";
import ProductPrice from "./components/ProductPrice";
import IncrementDecrementButton from "./components/IncDecButton";
import ProductImage from "./components/ProductImage";
import { product } from "./utils/data";
import { useState, useReducer, createContext } from "react";
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
            <ProductDetails product={product} />
            <ProductPrice product={product} />
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
