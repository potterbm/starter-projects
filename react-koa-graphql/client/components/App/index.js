import { hot } from 'react-hot-loader/root';

import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import styles from './styles.scss';

export default hot(() => (
  <div className={styles.Root}>
    <Switch>
      <Route component={Home} path="/" />
    </Switch>
  </div>
));
