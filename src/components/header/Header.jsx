import Icon from "../Icon";
import "../../styles/Header.css";
import { headerLinks } from "../../utils/data";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onCartButtonClick = () => {
    console.log("cart clicked");
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
          <div className="header__inner__left">
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
                className="header__logo__img"
              />
            </a>

            <nav className="header__nav">
              <ul>
                {headerLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="header__nav__link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header__inner__right">
            <button className="header__cart-btn" onClick={onCartButtonClick}>
              <Icon
                name="cart"
                alt="Cart icon"
                className="header__cart__icon"
              />
              {/* <svg className="header__cart__icon" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg> */}
            </button>
            <button className="header__profile">
              <img
                src={process.env.PUBLIC_URL + "/images/image-avatar.png"}
                alt="User Profile"
                className="header__profile-img"
              />
            </button>
          </div>
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
