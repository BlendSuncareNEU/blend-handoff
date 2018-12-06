import React from 'react';
import PrismicPageV2 from '../../prismic/prismic-page';

import Learn from './learn';

class LearnContainer extends React.Component {
  static pageType = 'learn';

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <Learn data={this.props.doc.data} />;
  }
}

export default PrismicPageV2(LearnContainer);
