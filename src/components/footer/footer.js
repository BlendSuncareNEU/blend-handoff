import React from 'react';

import '../../styles/components/footer.scss';

const Footer = () => (
  <footer className="component-footer__footer__wrapper">
    <span className="component-footer__span__copy-text">&copy; blend 2018</span>

    <nav className="component-footer__nav__container-page-navigation">
      <a href="#" className="component-footer__a__link-about">About</a>
      <a href="#" className="component-footer__a__link-learn">Learn</a>
      <a href="#" className="component-footer__a__link-shop">Shop</a>
      <a href="#" className="component-footer__a__link-contact">Contact</a>
    </nav>

    <nav className="component-footer__nav__container-social-navigation">
      /* social links here */
    </nav>
  </footer>
);

export default Footer;
