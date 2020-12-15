import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ReviewPanel } from './ReviewPanel';

export default {
  title: 'Components/Layout/ReviewPanel',
  component: ReviewPanel,
} as Meta;

export const Primary: React.VFC = () => <ReviewPanel />;
