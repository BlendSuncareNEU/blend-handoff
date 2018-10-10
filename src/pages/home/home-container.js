import React from 'react';
import { PrismicPage } from 'prismic-react-router';

import Home from './home';

class HomeContainer extends React.Component {
  static pageType = 'home';

  constructor(props) {
    super(props);
  }

  render() {
    return <Home />;
  }
}

export default PrismicPage(HomeContainer);
