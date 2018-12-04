import React from 'react';
import { PrismicPage } from 'prismic-react-router';

import Home from './home';

class HomeContainer extends React.Component {
  static pageType = 'home';

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.doc.data);
    return <Home data={this.props.doc.data} />;
  }
}

export default PrismicPage(HomeContainer);
