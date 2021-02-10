import 'babel-polyfill';

// import {
//  APP_INIT_ERROR, APP_READY, subscribe, initialize,
// } from '@edx/frontend-platform';
// import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// import Header, { messages as headerMessages } from '@edx/frontend-component-header';
// import Footer, { messages as footerMessages } from '@edx/frontend-component-footer';

import ExamplePage from './example/ExamplePage';
import Announcement from './ui/learner/Announcement';
import NotFoundPage from './ui/NotFoundPage';

import './index.scss';

const myStuff = (
  <>
    <Router>
      <Switch>
        <Route path="/example" component={ExamplePage} />
        <Route path="/announcement" component={Announcement} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  </>
);

ReactDOM.render(
  myStuff,
  document.getElementById('root'),
);
