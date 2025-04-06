import Icon from "../Icon";
import "../../styles/Header.css";
import { headerLinks } from "../../utils/data";
import { useContext, useState } from "react";
import MobileMenu from "./MobileMenu";
import Cart from "../Cart";
import { CartContext } from "../../App";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { cart } = useContext(CartContext);

  const onCartButtonClick = () => {
    setShowCart(!showCart);
  };

  const onMobileMenuToggleClick = () => {
    setShowMobileMenu(!showMobileMenu);
    if (!showMobileMenu) {
      document.body.style.overflow = "hidden"; // Disable scrolling when menu is open
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling when menu is closed
    }
  };

  const cartTotalCount = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  return (
    <header className="header">
      <h1 className="sr-only">E-commerce</h1>

      <div className="container">
        <div className="header__inner">
          <div className="header__inner-left">
            <button
              className="header__toggle-btn"
              onClick={onMobileMenuToggleClick}
            >
              <Icon name="menu" alt="Mobile menu toggle" />
            </button>

            <a href="#" className="header__logo" role="link" onClick={(e) => e.preventDefault()}>
              <img
                src={process.env.PUBLIC_URL + "/logo.svg"}
                alt="Sneaker Company"
              />
            </a>

            <nav className="header__nav" aria-label="Main navigation">
              <ul>
                {headerLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="header__link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header__inner-right">
            <button className="header__cart-btn" onClick={onCartButtonClick}>
              <Icon name="cart" alt="Cart icon" />
              <span className="header__cart-quantity">{cartTotalCount()}</span>
            </button>
            <button className="header__profile">
              <img
                src={process.env.PUBLIC_URL + "/images/image-avatar.png"}
                alt="User Profile"
                className="header__profile-img"
              />
            </button>
          </div>
          {showCart && <Cart setShowCart={setShowCart} />}
        </div>
      </div>

      <MobileMenu
        showMenu={showMobileMenu}
        toggleMenu={onMobileMenuToggleClick}
        headerLinks={headerLinks}
      />
    </header>
  );
};

export default Header;
