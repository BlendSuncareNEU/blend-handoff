import React from 'react';

import arrowIcon from '../../assets/icons/arrow-icon.png';
import facebookIcon from '../../assets/icons/social/facebook-icon.png';
import instagramIcon from '../../assets/icons/social/instagram-icon.png';
import twitterIcon from '../../assets/icons/social/twitter-icon.png';
import bottomPalm from '../../assets/images/footer-palm.png';

import '../../styles/components/footer.scss';

const Footer = () => (
  <footer className="component-footer__footer__wrapper">
    <div id="mc_embed_signup">
      <form
        action="https://blendsuncare.us19.list-manage.com/subscribe/post?u=e7937398ce992af97c54bbf1b&amp;id=9c62a7ea65"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <div
          id="mc_embed_signup_scroll"
          className="component-footer__div__wrapper-subscribe"
        >
          <p className="component-footer__p__subscribe-text">
            Subscribe to our Newsletter
          </p>
          <label htmlFor="mce-EMAIL" className="component-footer__label__email">
            Email
          </label>
          <div className="component-footer__div__info-row">
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="Email address"
              required
            />
            <div aria-hidden="true">
              <input
                type="hidden"
                name="b_e7937398ce992af97c54bbf1b_9c62a7ea65"
                tabIndex="-1"
                defaultValue=""
              />
            </div>
            <div className="clear">
              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="component-footer__button__email-subscribe"
              >
                <img
                  src={arrowIcon}
                  alt="Subscribe"
                  className="component-footer__img__icon-arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <nav className="component-footer__nav__container-social-navigation">
      <span className="component-footer__span__copy-text">
        &copy; Blend 2018
      </span>
      <div className="component-footer__div__container-links">
        <a href="#" className="component-footer__a__link-social">
          <img
            src={twitterIcon}
            alt=""
            className="component-footer__img__icon-social"
          />
        </a>
        <a href="#" className="component-footer__a__link-social">
          <img
            src={facebookIcon}
            alt=""
            className="component-footer__img__icon-social"
          />
        </a>
        <a href="#" className="component-footer__a__link-social">
          <img
            src={instagramIcon}
            alt=""
            className="component-footer__img__icon-social"
          />
        </a>
      </div>
    </nav>
    <img src={bottomPalm} className="component-footer__img__bottom-palm" />
  </footer>
);

export default Footer;
