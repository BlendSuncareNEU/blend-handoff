import React from 'react';
import { RichText } from 'prismic-reactjs';

import HeaderContainer from '../../components/header/header-container';
import Footer from '../../components/footer/footer';

import splashPalm from '../../assets/images/header-palm.png';
import bottomWave from '../../assets/images/bottom-wave.png';
import splashMan from '../../assets/images/man.png';
import splashWoman from '../../assets/images/woman.png';
import splashChild from '../../assets/images/child.png';
import birdLarge from '../../assets/images/bird-large.png';
import birdSmall from '../../assets/images/bird-small.png';
import ingredientsImage from '../../assets/images/sunscreen-bottle.png';
import ingredientsHorizontalImage from '../../assets/images/sunscreen-bottle-horizontal.png';
import sunscreenArm from '../../assets/images/hand.png';

import '../../styles/pages/home.scss';

const Home = ({ data }) => (
  <div className="page-wrapper page-home__div__wrapper">
    <HeaderContainer />

    <section className="page-home__section__wrapper-splash">
      <div className="page-home__div__container-splash-text">
        <h2 className="page-home__h2__splash-header">
          {RichText.asText(data.splash_header)}
        </h2>
        <p className="page-home__p__splash-subtext">
          {RichText.asText(data.splash_subtext)}
        </p>
        <a href="#" className="page-home__a__link-shop">
          Shop Blend
        </a>
      </div>

      <img src={birdSmall} className="page-home__img__bird-small" />
      <img src={birdLarge} className="page-home__img__bird-large" />
      <img src={splashMan} className="page-home__img__man" />
      <img src={splashWoman} className="page-home__img__woman" />
      <img src={splashChild} className="page-home__img__child" />
      <img src={splashPalm} className="page-home__img__palm-tree" />
      <img src={bottomWave} className="page-home__img__bottom-wave" />
    </section>

    <section className="page-home__section__container-features">
      <h2 className="page-home__h2__features-container-header">
        {RichText.asText(data.features_header)}
      </h2>

      <div className="page-home__div__wrapper-features-row">
        <div className="page-home__div__container-feature-element">
          <img
            src={data.feature_image_01.url}
            alt={data.feature_image_01.alt}
            className="page-home__img__icon-reef-safe"
          />
          <h3 className="page-home__h3__feature-header">
            {RichText.asText(data.feature_element_header_01)}
          </h3>
          <p className="page-home__p__feature-text">
            {RichText.asText(data.feature_element_desc_01)}
          </p>
        </div>

        <div className="page-home__div__container-feature-element">
          <img
            src={data.feature_image_02.url}
            alt={data.feature_image_02.alt}
            className="page-home__img__icon-white-cast"
          />
          <h3 className="page-home__h3__feature-header">
            {RichText.asText(data.feature_element_header_02)}
          </h3>
          <p className="page-home__p__feature-text">
            {RichText.asText(data.feature_element_desc_02)}
          </p>
        </div>

        <div className="page-home__div__container-feature-element">
          <img
            src={data.feature_image_03.url}
            alt={data.feature_image_03.alt}
            className="page-home__img__icon-organic-filters"
          />
          <h3 className="page-home__h3__feature-header">
            {RichText.asText(data.feature_element_header_03)}
          </h3>
          <p className="page-home__p__feature-text">
            {RichText.asText(data.feature_element_desc_03)}
          </p>
        </div>
      </div>
    </section>

    <section className="page-home__section__wrapper-ingredients">
      <div className="page-home__div__container-ingredients-header">
        <h2 className="page-home__h2__ingredients-container-header">
          {RichText.asText(data.ingredients_header)}
        </h2>
        <p className="page-home__p__ingredients-container-subtext">
          {RichText.asText(data.ingredients_subtext)}
        </p>
        <a href="#" className="page-home__a__learn-more-link">
          Learn More
        </a>
      </div>

      <div className="page-home__div__container-ingredients-body">
        <div className="page-home__div__wrapper-horizontal-image-col">
          <img
            src={data.ingredients_image_bottle_horizontal.url}
            alt={data.ingredients_image_bottle_horizontal.alt}
            className="page-home__img__image-tube-horizontal"
          />
        </div>

        <div className="page-home__div__wrapper-ingredients-col">
          <div className="page-home__div__container-ingredient-element">
            <h3 className="page-home__h3__ingredient-header">
              {RichText.asText(data.ingredients_element_header_01)}
            </h3>
            <p className="page-home__p__ingredient-text">
              {RichText.asText(data.ingredients_element_desc_01)}
            </p>
          </div>

          <div className="page-home__div__container-ingredient-element">
            <h3 className="page-home__h3__ingredient-header">
              {RichText.asText(data.ingredients_element_header_02)}
            </h3>
            <p className="page-home__p__ingredient-text">
              {RichText.asText(data.ingredients_element_desc_02)}
            </p>
          </div>
        </div>

        <div className="page-home__div__wrapper-ingredients-image-col">
          <img
            src={data.ingredients_image_bottle_vertical.url}
            alt={data.ingredients_image_bottle_vertical.alt}
            className="page-home__img__image-ingredients"
          />
        </div>

        <div className="page-home__div__wrapper-ingredients-col">
          <div className="page-home__div__container-ingredient-element">
            <h3 className="page-home__h3__ingredient-header">
              {RichText.asText(data.ingredients_element_header_03)}
            </h3>
            <p className="page-home__p__ingredient-text">
              {RichText.asText(data.ingredients_element_desc_03)}
            </p>
          </div>

          <div className="page-home__div__container-ingredient-element">
            <h3 className="page-home__h3__ingredient-header">
              {RichText.asText(data.ingredients_element_header_04)}
            </h3>
            <p className="page-home__p__ingredient-text">
              {RichText.asText(data.ingredients_element_desc_04)}
            </p>
          </div>
        </div>
      </div>
      <img src={sunscreenArm} className="page-home__img__image-arm" />
    </section>

    <section className="page-home__section__container-learn">
      <h2 className="page-home__h2__learn-container-header">
        {RichText.asText(data.learn_header)}
      </h2>
      <p className="page-home__p__learn-container-subtext">
        {RichText.asText(data.learn_subtext)}
      </p>

      <div className="page-home__div__wrapper-learn-row">
        <div className="page-home__div__container-learn-element">
          <img
            src={data.learn_image_01.url}
            alt={data.learn_image_01.alt}
            className="page-home__img__image-learn-icon"
          />
          <h3 className="page-home__h3__learn-header">
            {RichText.asText(data.learn_element_header_01)}
          </h3>
          <p className="page-home__p__learn-text">
            {RichText.asText(data.learn_element_desc_01)}
          </p>
        </div>

        <div className="page-home__div__container-learn-element">
          <img
            src={data.learn_image_02.url}
            alt={data.learn_image_02.alt}
            className="page-home__img__image-learn-icon"
          />
          <h3 className="page-home__h3__learn-header">
            {RichText.asText(data.learn_element_header_02)}
          </h3>
          <p className="page-home__p__learn-text">
            {RichText.asText(data.learn_element_desc_02)}
          </p>
        </div>

        <div className="page-home__div__container-learn-element">
          <img
            src={data.learn_image_03.url}
            alt={data.learn_image_03.alt}
            className="page-home__img__image-learn-icon"
          />
          <h3 className="page-home__h3__learn-header">
            {RichText.asText(data.learn_element_header_03)}
          </h3>
          <p className="page-home__p__learn-text">
            {RichText.asText(data.learn_element_desc_03)}
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;
