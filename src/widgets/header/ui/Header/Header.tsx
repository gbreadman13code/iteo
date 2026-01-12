import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames";
import { ROUTES } from "@/shared/config/routes";
import "./Header.scss";
import "./Header.scss";
import logo from "../../assets/logo.png";
import logoMobile from "../../assets/logo_mobile.png";
import vkIcon from "../../assets/vk.png";

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "О НАС", path: ROUTES.ABOUT },
    { label: "ПРОЕКТЫ", path: ROUTES.PROJECTS },
    // { label: 'УСЛУГИ', path: ROUTES.SERVICES },
    { label: "КОНТАКТЫ", path: ROUTES.CONTACTS },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const currentTitle =
    navItems.find((item) => item.path === location.pathname)?.label || "";

  const isMainPage = location.pathname === ROUTES.HOME;

  console.log(isMainPage);

  return (
    <header
      className={classNames("header", {
        "header--open": isMenuOpen,
        "header--main": isMainPage,
      })}
    >
      <div className="header__logo">
        <Link to={ROUTES.HOME} onClick={closeMenu}>
          <picture>
            <source media="(max-width: 767px)" srcSet={logoMobile} />
            <img src={logo} alt="ITEO" />
          </picture>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="header__nav header__nav--desktop">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={classNames({
                  active: location.pathname === item.path,
                })}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header__socials header__socials--desktop">
        <a href="https://vk.com/iteo_krsk" target="_blank" className="vk-link">
          <img src={vkIcon} alt="VK" />
        </a>
      </div>

      {/* Mobile Controls (Visible on mobile) */}
      <div className="header__mobile-controls">
        {!isMenuOpen && currentTitle && (
          <span className="header__mobile-title">{currentTitle}</span>
        )}
        <button
          className={classNames("header__burger", { active: isMenuOpen })}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={classNames("header__mobile-menu", {
          "header__mobile-menu--open": isMenuOpen,
        })}
      >
        <nav className="header__mobile-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={classNames("mobile-link", {
                    active: location.pathname === item.path,
                  })}
                  onClick={closeMenu}
                >
                  {item.label.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
