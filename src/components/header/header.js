import React from 'react';

import menuIcon from '../../assets/icons/menu-icon.png';

import '../../styles/components/header.scss';

const Header = () => (
  <header className="component-header__header__wrapper">
    <h1 className="component-header__h1__temp-brand-mark">blend</h1>
    <nav className="component-header__nav__navigation-page">
      <img
        src={menuIcon}
        alt="Navigation"
        className="component-header__img__icon-navigation"
      />
    </nav>
  </header>
);

export default Header;
