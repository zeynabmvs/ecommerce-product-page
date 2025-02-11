import Header from "./components/header/Header";
import Button from "./components/Button";
import ProductDetails from "./components/ProductDetails";
import ProductPrice from "./components/ProductPrice";
import IncrementDecrementButton from "./components/IncDecButton";
import ProductImage from "./components/ProductImage";

function App() {
  return (
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
          <ProductPrice current={"$123"} percentage={"50%"} previous={"$250"} />
          <div className="cs-buttons">
            <IncrementDecrementButton maxValue={"10"} />
            <Button name="Add to cart" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
