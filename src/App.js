import Icon from "./components/Icon";
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
      <main className="container">
        {/* <Icon name="cart" alt="cart Icon" />
      <Icon name="close" alt="close Icon" /> */}

        {/* Collections
      Men
      Women
      About
      Contact

      Sneaker Company

      Fall Limited Edition Sneakers

      These low-profile sneakers are your perfect casual wear companion. Featuring a 
      durable rubber outer sole, they’ll withstand everything the weather can offer.

      $125.00
      50%
      $250.00

      0
      Add to cart */}
        <ProductImage />

        <Button name="Add to cart" />
        <ProductDetails
          title={"Sneaker company"}
          heading={"Fall limited edition sneakers"}
          content={
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer"
          }
        />
        <ProductPrice current={"$123"} percentage={"50%"} previous={"$250"} />
        <IncrementDecrementButton maxValue={"10"} />
      </main>
    </div>
  );
}

export default App;
