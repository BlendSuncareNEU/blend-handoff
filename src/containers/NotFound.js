import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Oops, seems like there's nothing here!</h1>
        <p>
          Click <a href="/">here</a> to go back to home
        </p>
      </div>
    );
  }
}