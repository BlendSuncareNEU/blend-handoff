import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
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
          componentProps={{ uid: 'home' }} // pass in page UID if not in path
          component={HomeContainer} // components should be of type PrismicPage
        />
        <PrismicRoute
          path="/about-us"
          exact
          routerProps={props}
          componentProps={{ uid: 'about' }} // pass in page UID if not in path
          component={AboutContainer} // components should be of type PrismicPage
        />
        <PrismicRoute
          path="/learn/article/:id"
          exact
          routerProps={props}
          componentProps={{ uid: 'learn' }} // pass in page UID if not in path
          component={LearnContainer} // components should be of type PrismicPage
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
