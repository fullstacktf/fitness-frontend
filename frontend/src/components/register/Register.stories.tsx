import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Register } from './Register';

export default {
  title: 'Components/Register',
  component: Register,
} as Meta;

export const Primary: React.VFC = () => <Register />;
