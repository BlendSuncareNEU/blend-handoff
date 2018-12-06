import React from 'react';
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';

import HeaderContainer from '../../components/header/header-container';
import Footer from '../../components/footer/footer';

import bottomWave from '../../assets/images/bottom-wave-02.png';

import '../../styles/pages/learn.scss';

const Learn = ({ data }) => (
  <div className="page-wrapper page-learn__div__wrapper">
    <HeaderContainer />

    <section className="page-learn__section__wrapper-splash">
      <h2>{RichText.asText(data.article_splash_title)}</h2>
      <h3>{RichText.asText(data.article_splash_description)}</h3>
      <img src={bottomWave} className="page-learn__img__bottom-wave" />
    </section>

    <section className="page-learn__section__wrapper-article">
      {Article(data)}

      <h2 className="page-learn__h2__other-articles">Related Articles</h2>
      <div className="page-learn__div__wrapper-articles">
        <Link to={'/article/' + data.related_article_uid_01.slug}>
          <div className="page-learn__div__container-learn-element">
            <img
              src={data.related_article_image_01.url}
              alt={data.related_article_image_01.alt}
              className="page-learn__img__image-learn-icon"
            />
            <h3 className="page-learn__h3__learn-header">
              {RichText.asText(data.related_article_title_01)}
            </h3>
          </div>
        </Link>
        <Link to={'/article/' + data.related_article_uid_02.slug}>
          <div className="page-learn__div__container-learn-element">
            <img
              src={data.related_article_image_02.url}
              alt={data.related_article_image_02.alt}
              className="page-learn__img__image-learn-icon"
            />
            <h3 className="page-learn__h3__learn-header">
              {RichText.asText(data.related_article_title_02)}
            </h3>
          </div>
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

function Article(props) {
  const items = props.body;
  let listItems = [];
  items.forEach(element => {
    if (element.slice_type == 'paragraph') {
      listItems.push(
        <p className="article-paragraph">
          {RichText.asText(element.primary.article_paragraph)}
        </p>
      );
    } else if (element.slice_type == 'header') {
      listItems.push(
        <h3 className="section-header">
          {RichText.asText(element.primary.section_header)}
        </h3>
      );
    } else if (element.slice_type == 'image') {
      listItems.push(
        <img
          className="article-image"
          src={element.primary.article_image.url}
          alt={element.primary.article_image.alt}
        />
      );
    }
  });
  return listItems;
}

export default Learn;
