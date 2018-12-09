import React from 'react';
import { PrismicPage } from 'prismic-react-router';

import About from './about';

class AboutContainer extends React.Component {
  static pageType = 'about';

  constructor(props) {
    super(props);
  }

  render() {
    return <About data={this.props.doc.data} />;
  }
}

export default PrismicPage(AboutContainer);
