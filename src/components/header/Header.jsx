import Icon from "../Icon";
import "../../styles/Header.css";
import { headerLinks } from "../../utils/data";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Cart from "../Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__inner-left">
            <button
              className="header__toggle-btn"
              onClick={onMobileMenuToggleClick}
            >
              <Icon name="menu" alt="Mobile menu toggle" />
            </button>

            <a href="/#" className="header__logo">
              <img
                src={process.env.PUBLIC_URL + "/logo.svg"}
                alt="Sneaker Company"
              />
            </a>

            <nav className="header__nav">
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
