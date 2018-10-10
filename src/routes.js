import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrismicRoute } from 'prismic-react-router';

import HomeContainer from './pages/home/home-container';
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
        <Route path="*" component={NotFoundContainer} />
      </Switch>
    </Router>
  );
};

export default Routes;
