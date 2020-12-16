import React from 'react';
import * as History from 'history';
import { Router } from 'react-router-dom';
import { Meta } from '@storybook/react/types-6-0';
import { Navbar } from './Navbar';

export default {
  title: 'Components/Layout/Navbar',
  component: Navbar,
} as Meta;

export const Primary = () => {
  const history = History.createMemoryHistory();
  <Router history={history} >
    <Navbar />
  </Router>
}
