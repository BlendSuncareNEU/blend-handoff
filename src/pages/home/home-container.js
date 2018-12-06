import React from 'react';
import { PrismicPage } from 'prismic-react-router';

import Home from './home';

class HomeContainer extends React.Component {
  static pageType = 'home';

  constructor(props) {
    super(props);

    this.state = {
      displayIngredientsOverlay: false,
    };
    this.toggleIngredientsOverlay = this.toggleIngredientsOverlay.bind(this);
  }

  toggleIngredientsOverlay(event) {
    event.preventDefault();
    this.setState({
      displayIngredientsOverlay: !this.state.displayIngredientsOverlay,
    });
  }

  render() {
    return (
      <Home
        displayIngredientsOverlay={this.state.displayIngredientsOverlay}
        toggleIngredientsOverlay={event => this.toggleIngredientsOverlay(event)}
        data={this.props.doc.data}
      />
    );
  }
}

export default PrismicPage(HomeContainer);
