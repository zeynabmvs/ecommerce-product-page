import Icon from "../Icon";

const MobileMenu = ({ showMenu, toggleMenu, headerLinks }) => {
  return (
    <div className="mobile-menu">
      {/* Gray Overlay */}
      <div
        className={`mobile-menu__backdrop ${
          showMenu ? "mobile-menu__backdrop--open" : ""
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Slide-in Menu */}
      <div
        className={`mobile-menu__overlay ${
          showMenu ? "mobile-menu__overlay--open" : ""
        }`}
      >
        {/* Close Button */}
        <button
          className="mobile-menu__close"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <Icon
            name="close"
            alt="Close icon"
            className="mobile-menu__close__icon"
          />
        </button>

        {/* Menu Items */}
        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__list">
            {headerLinks.map((item) => (
              <li key={item.label} className="mobile-menu__item">
                <a
                  href={item.href}
                  className="mobile-menu__link"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
