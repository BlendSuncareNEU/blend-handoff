import React from 'react';
import { PrismicPage } from 'prismic-react-router';

import Learn from './learn';

class LearnContainer extends React.Component {
  static pageType = 'learn';

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <Learn />;
  }
}

export default PrismicPage(LearnContainer);
