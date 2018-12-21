import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrismicRoute } from 'prismic-react-router';

import HomeContainer from './pages/home/home-container';
import AboutContainer from './pages/about/about-container';
import LearnContainer from './pages/learn/learn-container';
import NotFoundContainer from './pages/not-found/not-found-container';

const Routes = props => {
  return (
    <Router>
      <Switch>
        <PrismicRoute
          path="/"
          exact
          routerProps={props}
          componentProps={{ uid: 'home' }}
          component={HomeContainer}
        />
        <PrismicRoute
          path="/about-us"
          exact
          routerProps={props}
          componentProps={{ uid: 'about' }}
          component={AboutContainer}
        />
        <PrismicRoute
          path="/article/:uid"
          exact
          routerProps={props}
          component={LearnContainer}
        />
        <PrismicRoute
          routerProps={props}
          componentProps={{ uid: 'notfound' }}
          component={NotFoundContainer}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
