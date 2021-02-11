import 'babel-polyfill';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import { ErrorPage } from '@edx/frontend-platform/react';
import React from 'react';
import ReactDOM from 'react-dom';

import Announcement from './ui/learner/Announcement';

import './index.scss';

const myStuff = (
  <>
    <Announcement />
  </>
);

subscribe(APP_READY, () => {
  ReactDOM.render(
    myStuff,
    document.getElementById('root'),
  );
});
subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages: [],
});
