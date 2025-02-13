import Header from "./components/header/Header";

import { product } from "./utils/data";
import { useReducer, createContext } from "react";
import cartReducer from "./reducer";
import Product from "./components/Product.jsx";

export const CartContext = createContext();

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <div className="app">
        <Header />
        <main>
          <Product product={product} />
        </main>
      </div>
    </CartContext.Provider>
  );
}

export default App;
