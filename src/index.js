import React from 'react';
import ReactDOM from 'react-dom';
import { PrismicWrapper } from 'prismic-react-router';
import PrismicConfig from './prismic/prismic-configuration';

import Routes from './routes';

ReactDOM.render(
  <PrismicWrapper routes={Routes} repositoryName="blend" />,
  document.getElementById('root')
);
