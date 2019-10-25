import React from 'react';
import { RichText } from 'prismic-reactjs';

import HeaderContainer from '../../components/header/header-container';
import Footer from '../../components/footer/footer';

import bottomWave from '../../assets/images/bottom-wave.png';

import '../../styles/pages/about.scss';

const About = ({ data }) => (
  <div className="page-wrapper page-about__div__wrapper">
    <div className="page-wrapper page-about__div__wrapper">
      <HeaderContainer />
      <section className="page-about__section__wrapper-splash">
        <h2 className="page-about__h2__splash-header">
          {RichText.asText(data.splash_header)}
        </h2>
        <img src={bottomWave} className="page-about__img__bottom-wave" />
      </section>
      <section className="page-about__section__wrapper-content">
        <div className="page-about__p__intro-text">
          {/* {RichText.asText(data.about_intro_text)} */}
          {RichText.render(data.about_intro_text)}
        </div>
        {/* <div className="page-about__div__wrapper-member">
          <img
            src={data.founder_image.url}
            alt={data.founder_image.alt}
            className="page-about__img__founder-image"
          />
          <div className="page-about__div__container-text">
            <h2>{RichText.asText(data.founder_header)}</h2>
            <p>{RichText.asText(data.founder_about)}</p>
          </div>
        </div> */}
      </section>
      <Footer />
    </div>
  </div>
);

export default About;
