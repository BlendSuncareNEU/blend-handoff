import React from 'react';

import facebookIcon from '../../assets/icons/social/facebook-icon.png';
import googlePlusIcon from '../../assets/icons/social/google-plus-icon.png';
import instagramIcon from '../../assets/icons/social/instagram-icon.png';
import twitterIcon from '../../assets/icons/social/twitter-icon.png';

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
      <a href="#" className="component-footer__a__link-social">
        <img src={twitterIcon} alt="" className="component-footer__img__icon-social" />
      </a>
      <a href="#" className="component-footer__a__link-social">
        <img src={facebookIcon} alt="" className="component-footer__img__icon-social" />
      </a>
      <a href="#" className="component-footer__a__link-social">
        <img src={googlePlusIcon} alt="" className="component-footer__img__icon-social" />
      </a>
      <a href="#" className="component-footer__a__link-social">
        <img src={instagramIcon} alt="" className="component-footer__img__icon-social" />
      </a>
    </nav>
  </footer>
);

export default Footer;
