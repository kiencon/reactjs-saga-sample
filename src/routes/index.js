import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
//import styled from 'styled-components';
import routes from './routes';

const generateTitleForChildTemplates = pathName => {
  const pathNameList = pathName.split('/');
  const title = pathNameList.pop();
  return `${title.charAt(0).toUpperCase() + title.slice(1)} | Template.net`;
};

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Switch>
        {routes.map(item => (
          <Route key={item.path} {...item}>
            <Helmet>
              <title>
                {item.title
                  ? `${item.title} | Template.net`
                  : generateTitleForChildTemplates(item.path)}
              </title>
            </Helmet>
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

// const Wrapper = styled.div`

// `;

export default Routes;
