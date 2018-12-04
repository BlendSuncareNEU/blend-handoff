import React from 'react';

import BrandWordmark from '../../assets/icons/brand-wordmark.png';
import MenuIcon from '../../assets/icons/menu-icon.png';
import CloseIcon from '../../assets/icons/close.png';

import '../../styles/components/header.scss';

const Header = ({ toggleMobileNavigation, displayMobileNavigation }) => (
  <header className="component-header__header__wrapper">
    <img
      src={BrandWordmark}
      alt="Blend"
      className="component-header__img__icon-wordmark"
    />
    <img
      src={MenuIcon}
      alt="Menu"
      className="component-header__img__icon-menu"
      onClick={toggleMobileNavigation}
    />
    <nav
      className={
        displayMobileNavigation
          ? 'component-header__nav__mobile-navigation-page'
          : 'component-header__nav__navigation-page'
      }
    >
      <img
        src={CloseIcon}
        alt="Close"
        className="component-header__img__icon-close"
        onClick={toggleMobileNavigation}
      />
      <a href="#" className="component-header__a__page-link">
        About Us
      </a>
      <a href="#" className="component-header__a__page-link">
        Learn
      </a>
    </nav>
  </header>
);

export default Header;
