import Icon from "./components/Icon";
import Header from "./components/header/Header";
import Button from "./components/Button";

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

        <Button name="Add to cart" />
      </main>
    </div>
  );
}

export default App;
