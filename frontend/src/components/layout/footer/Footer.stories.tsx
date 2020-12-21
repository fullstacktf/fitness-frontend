import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Footer } from './Footer';

export default {
  title: 'Components/Layout/Footer',
  component: Footer,
} as Meta;

export const Primary: React.VFC = () => <Footer />;
