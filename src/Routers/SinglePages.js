import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Landing from '../views/Landing';

const SinglePages = () => (
  <Fragment>
    <Route path='/' exact component={Landing} />
    {/* <Route path='/register' exact component={} />
    <Route path='/password' exact component={} />
    <Route path='/404' exact component={} /> */}
  </Fragment>
);

export default SinglePages;
