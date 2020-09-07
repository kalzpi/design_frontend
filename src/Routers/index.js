import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SinglePages from './SinglePages';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <SinglePages />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
