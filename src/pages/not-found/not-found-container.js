import React from 'react';
import { PrismicPage } from 'prismic-react-router';

import NotFound from './not-found';

class NotFoundContainer extends React.Component {
  static pageType = 'notfound';

  constructor(props) {
    super(props);
  }

  render() {
    return <NotFound />;
  }
}

export default PrismicPage(NotFoundContainer);
