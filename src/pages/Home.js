import React, { Component } from 'react';
import '../styles/app.scss';
import { RichText } from 'prismic-reactjs';
import { PrismicPage } from 'prismic-react-router';
import NotFound from './NotFound';

class Home extends Component {
  static pageType = 'home';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="hero">
          <h1>{RichText.asText(this.props.doc.data.hero_title)}</h1>
        </div>
        <p className="info">
          This is the starter project for a React app to serve as the site for
          Blend. It pulls in content from Prismic, the headless CMS of choice
          for this project.
        </p>
        <p className="info" style={{ marginTop: 20 }}>
          Go to an <a href="/undefined">undefined route</a>
        </p>
      </div>
    );
  }
}

export default PrismicPage(Home, NotFound);
