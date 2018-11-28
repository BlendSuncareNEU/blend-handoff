import React from 'react';

import HeaderContainer from '../../components/header/header-container';
import Footer from '../../components/footer/footer';

import splashPalm from '../../assets/images/header-palm.png';
import bottomWave from '../../assets/images/bottom-wave.png';
import splashMan from '../../assets/images/man.png';
import splashWoman from '../../assets/images/woman.png';
import splashChild from '../../assets/images/child.png';

import reefSafeIcon from '../../assets/icons/coral-icon.png';
import noWhiteCastIcon from '../../assets/icons/sunglasses-icon.png';
import organicFiltersIcon from '../../assets/icons/leaf-icon.png';

import ingredientsImage from '../../assets/images/sunscreen-bottle.png';
import ingredientsHorizontalImage from '../../assets/images/sunscreen-bottle-horizontal.png';
import sunscreenArm from '../../assets/images/hand.png';

import learnIconOne from '../../assets/icons/learn-icon-1.png';
import learnIconTwo from '../../assets/icons/learn-icon-2.png';
import learnIconThree from '../../assets/icons/learn-icon-3.png';

import '../../styles/pages/home.scss';

const Home = () => (
  <div className="page-wrapper page-home__div__wrapper">
    <HeaderContainer />

    <section className="page-home__section__wrapper-splash">
      <div className="page-home__div__container-splash-text">
        <h2 className="page-home__h2__splash-header">
          The sunscreen for everyone
        </h2>
        <p className="page-home__p__splash-subtext">
          The only total solar protectant with both you and the environment in
          mind
        </p>
        <a href="#" className="page-home__a__link-shop">
          Shop Blend
        </a>
      </div>

      <img src={splashPalm} className="page-home__img__palm-tree" />
      <img src={splashMan} className="page-home__img__man" />
      <img src={splashWoman} className="page-home__img__woman" />
      <img src={splashChild} className="page-home__img__child" />
      <img src={bottomWave} className="page-home__img__bottom-wave" />
    </section>

    <section className="page-home__section__container-features">
      <h2 className="page-home__h2__features-container-header">
        Why You'll Love Blend
      </h2>

      <div className="page-home__div__wrapper-features-row">
        <div className="page-home__div__container-feature-element">
          <img src={reefSafeIcon} className="page-home__img__icon-reef-safe" />
          <h3 className="page-home__h3__feature-header">Reef Safe</h3>
          <p className="page-home__p__feature-text">
            In cray magna, keffiyeh dreamcatcher normcore id nisi sartorial
            schlitz portland banjo crucifix health goth.
          </p>
        </div>

        <div className="page-home__div__container-feature-element">
          <img src={noWhiteCastIcon} className="page-home__img__icon-white-cast" />
          <h3 className="page-home__h3__feature-header">No White Cast</h3>
          <p className="page-home__p__feature-text">
            In cray magna, keffiyeh dreamcatcher normcore id nisi sartorial
            schlitz portland banjo crucifix health goth.
          </p>
        </div>

        <div className="page-home__div__container-feature-element">
          <img src={organicFiltersIcon} className="page-home__img__icon-organic-filters" />
          <h3 className="page-home__h3__feature-header">Organic UV Filters</h3>
          <p className="page-home__p__feature-text">
            In cray magna, keffiyeh dreamcatcher normcore id nisi sartorial
            schlitz portland banjo crucifix health goth.
          </p>
        </div>
      </div>
    </section>

    <section className="page-home__section__wrapper-ingredients">
      <div className="page-home__div__container-ingredients-header">
        <h2 className="page-home__h2__ingredients-container-header">
          Ingredients
        </h2>
        <p className="page-home__p__ingredients-container-subtext">
          Entrepreneur creative iPad niche market launch party hypotheses
          hackathon ecosystem stealth focus conversion social media adviser.
        </p>
        <a href="#" className="page-home__a__learn-more-link">
          Learn More
        </a>
      </div>

      <div className="page-home__div__container-ingredients-body">
        <div className="page-home__div__wrapper-horizontal-image-col">
          <img
            src={ingredientsHorizontalImage}
            alt="Blend Sunscreen"
            className="page-home__img__image-tube-horizontal"
          />
        </div>

        <div className="page-home__div__wrapper-ingredients-col">
          <div className="page-home__div__container-ingredient-element">
            <h3 className="page-home__h3__ingredient-header">First One</h3>
            <p className="page-home__p__ingredient-text">
              Crowdfunding network effects accelerator disruptive
              business-to-business series A.
            </p>
          </div>

          <div className="page-home__div__container-ingredient-element">
            <h3 className="page-home__h3__ingredient-header">Second One</h3>
            <p className="page-home__p__ingredient-text">
              Crowdfunding network effects accelerator disruptive
              business-to-business series A financing focus agile development
              metrics graphical user interface.
            </p>
          </div>
        </div>

        <div className="page-home__div__wrapper-ingredients-image-col">
          <img
            src={ingredientsImage}
            alt="Blend Sunscreen"
            className="page-home__img__image-ingredients"
          />
        </div>

        <div className="page-home__div__wrapper-ingredients-col">
          <div className="page-home__div__container-ingredient-element">
            <h3 className="page-home__h3__ingredient-header">Third One</h3>
            <p className="page-home__p__ingredient-text">
              Crowdfunding network effects accelerator disruptive
              business-to-business series A.
            </p>
          </div>

          <div className="page-home__div__container-ingredient-element">
            <h3 className="page-home__h3__ingredient-header">Fourth One</h3>
            <p className="page-home__p__ingredient-text">
              Crowdfunding network effects accelerator disruptive
              business-to-business series A financing focus agile development
              metrics graphical user interface.
            </p>
          </div>
        </div>
      </div>
      <img
        src={sunscreenArm}
        className="page-home__img__image-arm"
      />
    </section>

    <section className="page-home__section__container-learn">
      <h2 className="page-home__h2__learn-container-header">Learn</h2>
      <p className="page-home__p__learn-container-subtext">
        Entrepreneur creative iPad niche market launch party hypotheses
        hackathon ecosystem stealth focus conversion social media adviser.
      </p>

      <div className="page-home__div__wrapper-learn-row">
        <div className="page-home__div__container-learn-element">
          <img
            src={learnIconOne}
            alt="placeholder image"
            className="page-home__img__image-learn-icon"
          />
          <h3 className="page-home__h3__learn-header">
            The Importance of Sunscreen for Every Skin Tone
          </h3>
          <p className="page-home__p__learn-text">
            First mover advantage ownership bootstrapping user experience
            client. Business model canvas holy grail gamification.
          </p>
        </div>

        <div className="page-home__div__container-learn-element">
          <img
            src={learnIconTwo}
            alt="placeholder image"
            className="page-home__img__image-learn-icon"
          />
          <h3 className="page-home__h3__learn-header">
            Broad Spectrum, SPF, PPD? Deciphering Sunscreen Lingo
          </h3>
          <p className="page-home__p__learn-text">
            First mover advantage ownership bootstrapping user experience
            client. Business model canvas holy grail gamification.
          </p>
        </div>

        <div className="page-home__div__container-learn-element">
          <img
            src={learnIconThree}
            alt="placeholder image"
            className="page-home__img__image-learn-icon"
          />
          <h3 className="page-home__h3__learn-header">
            Physical vs. Chemical UV filters
          </h3>
          <p className="page-home__p__learn-text">
            First mover advantage ownership bootstrapping user experience
            client. Business model canvas holy grail gamification.
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;
