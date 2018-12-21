import React from 'react';
import { Link } from 'react-router-dom';

import HeaderContainer from '../../components/header/header-container';

import splashWoman from '../../assets/images/error-woman.png';
import bottomWave from '../../assets/images/bottom-wave.png';

import '../../styles/pages/not-found.scss';

const NotFound = () => (
  <div className="page-wrapper page-not-found__div__wrapper">
    <HeaderContainer />

    <section className="page-not-found__section__wrapper-splash">
      <div className="page-not-found__div__container-splash-text">
        <h2 className="page-not-found__h2__splash-header">
          404 Sunscreen went wrong
        </h2>
        <p className="page-not-found__p__splash-subtext">
          The page you are looking for is not available. Use the button below to
          return to the home page.
        </p>
        <Link to="/" className="page-not-found__a__link-home">
          Home
        </Link>
      </div>

      <img src={splashWoman} className="page-not-found__img__woman" />
      <img src={bottomWave} className="page-not-found__img__bottom-wave" />
    </section>
  </div>
);

export default NotFound;
