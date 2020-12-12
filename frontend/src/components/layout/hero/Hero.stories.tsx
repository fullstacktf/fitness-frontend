import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Hero } from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
} as Meta;

export const Primary: React.VFC = () => <Hero />;
