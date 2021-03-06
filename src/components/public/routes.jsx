import { Route, Switch } from 'react-router-dom';
import React from 'react';

const routes = () => (
  <Switch>
    <Route exact path="/" render={() => <h1>public root</h1>} />
    <Route exact path="/publichome" render={() => <h1>public home</h1>} />
  </Switch>
);

export default routes;
