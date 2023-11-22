import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Switch>
        {routes.map((item) => (
          <Route key={item.path} {...item}>
            <item.Component />
          </Route>
        ))}
        <Route path="*">
          <Redirect to={'/home'} />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
