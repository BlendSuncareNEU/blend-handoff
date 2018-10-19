import React from 'react';

import HeaderContainer from '../../components/header/header-container';
import Footer from '../../components/footer/footer';

import reefSafeIcon from '../../assets/icons/coral-icon.png';
import noWhiteCastIcon from '../../assets/icons/sunglasses-icon.png';
import organicFiltersIcon from '../../assets/icons/leaf-icon.png';
import ingredientsImage from '../../assets/icons/tube-icon.png';
import ingredientsHorizontalImage from '../../assets/icons/tube-horizontal-icon.png';
import quoteIcon from '../../assets/icons/quotes-icon.png';
import userIcon from '../../assets/icons/user-icon.png';
import learnPlaceholderImage from '../../assets/icons/placeholder-icon.png';

import '../../styles/pages/home.scss';

const Home = () => (
  <div className="page-wrapper page-home__div__wrapper">
    <HeaderContainer />

    <section className="page-home__section__container-splash">
      <h2 className="page-home__h2__splash-header">Meet Blend</h2>
      <p className="page-home__p__splash-subtext">
        The only total solar protectant created with both you, and the
        environment in mind. Hella cupidatat ugh tofu succulents. Tempor tote
        bag snackwave polaroid officia. Subway tile est thundercats, neutra
        direct trade elit chicharrones trust fund.
      </p>
      <a href="#" className="page-home__a__link-shop">
        Shop Blend
      </a>
    </section>

    <section className="page-home__section__container-features">
      <h2 className="page-home__h2__features-container-header">Features</h2>
      <p className="page-home__p__features-container-subtext">
        Entrepreneur creative iPad niche market launch party hypotheses
        hackathon ecosystem stealth focus conversion social media adviser.
      </p>

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

    <section className="page-home__section__container-ingredients">
      <h2 className="page-home__h2__ingredients-container-header">
        Ingredients
      </h2>
      <p className="page-home__p__ingredients-container-subtext">
        Entrepreneur creative iPad niche market launch party hypotheses
        hackathon ecosystem stealth focus conversion social media adviser.
      </p>

      <div className="page-home__div__wrapper-ingredients-row">
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
      <a href="#" className="page-home__a__learn-more-link">
        Learn More
      </a>
    </section>

    <section className="page-home__section__container-reviews">
      <h2 className="page-home__h2__reviews-container-header">
        Customer Reviews
      </h2>
      <p className="page-home__p__reviews-container-subtext">
        Entrepreneur creative iPad niche market launch party hypotheses
        hackathon ecosystem stealth focus conversion social media adviser.
      </p>

      <div className="page-home__div__wrapper-reviews-row">
        <div className="page-home__div__container-review-element">
          <img src={quoteIcon} alt="" className="page-home__img__icon-quote" />
          <p className="page-home__p__review-text">
            Business-to-consumer twitter quity vesting period social media
            research &amp; development ramen.
          </p>
        </div>

        <div className="page-home__div__container-middle-element">
          <div className="page-home__div__container-middle-element-comment">
            <img src={quoteIcon} alt="" className="page-home__img__icon-quote" />
            <p className="page-home__p__review-text">
              Business-to-consumer twitter quity vesting period social media
              research &amp; development ramen.
            </p>
          </div>

          <div className="page-home__div__container-review-user">
            <img src={userIcon} alt="" className="page-home__img__icon-user" />
            <span className="page-home__span__user-name">John Kane, 67</span>
          </div>
        </div>

        <div className="page-home__div__container-review-element">
          <img src={quoteIcon} alt="" className="page-home__img__icon-quote" />
          <p className="page-home__p__review-text">
            Business-to-consumer twitter quity vesting period social media
            research &amp; development ramen.
          </p>
        </div>
      </div>
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
            src={learnPlaceholderImage}
            alt="placeholder image"
            className="page-home__img__image-learn-placeholder"
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
            src={learnPlaceholderImage}
            alt="placeholder image"
            className="page-home__img__image-learn-placeholder"
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
            src={learnPlaceholderImage}
            alt="placeholder image"
            className="page-home__img__image-learn-placeholder"
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
