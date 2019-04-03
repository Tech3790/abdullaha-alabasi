import * as React from 'react';
import { Helmet } from 'react-helmet';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import { Switch } from 'react-router-dom';

// components
import { ScrollToTop } from './components';

// pages
import { ErrorPage, HomePage } from './pages';

// settings
import { settings } from './settings';

// templates
import { MainTemplate } from './templates';

// styles
import './App.sass';

const history = createBrowserHistory();

export const App: React.SFC = () => (
  <Router history={history}>
    <ScrollToTop>
      <MainTemplate>
        <Helmet titleTemplate={`%s | ${settings.title}`} />
        <Switch>
          <Route path="/" component={HomePage} exact />

          <Route component={ErrorPage} />
        </Switch>
      </MainTemplate>
    </ScrollToTop>
  </Router>
);

export const AppProviders: React.SFC = ({ children }) => (
  <>
    {children}
  </>
);
