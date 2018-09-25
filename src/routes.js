import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrismicRoute } from 'prismic-react-router';

import Home from './containers/Home';
import NotFound from './containers/NotFound';

const Routes = props => {
  return (
    <Router>
      <Switch>
        <PrismicRoute
          path="/"
          exact
          routerProps={props}
          componentProps={{ uid: 'home' }} // pass in page UID if not in path
          component={Home} // components should be of type PrismicPage
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
