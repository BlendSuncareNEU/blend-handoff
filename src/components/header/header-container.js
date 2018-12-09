import React from 'react';

import Header from './header';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMobileNavigation: false,
    };
    this.toggleMobileNavigation = this.toggleMobileNavigation.bind(this);
  }

  toggleMobileNavigation(event) {
    event.preventDefault();
    this.setState({
      displayMobileNavigation: !this.state.displayMobileNavigation,
    });
  }

  render() {
    return (
      <Header
        displayMobileNavigation={this.state.displayMobileNavigation}
        toggleMobileNavigation={event => this.toggleMobileNavigation(event)}
      />
    );
  }
}

export default HeaderContainer;
