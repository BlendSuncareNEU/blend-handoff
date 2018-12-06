import React from 'react';
import { PrismicPage } from 'prismic-react-router';

// import About from './about';

class LearnContainer extends React.Component {
  static pageType = 'learn';

  constructor(props) {
    super(props);
  }

  render() {
    return;
  }
}

export default PrismicPage(LearnContainer);
