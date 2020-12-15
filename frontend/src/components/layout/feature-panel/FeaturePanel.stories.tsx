import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { FeaturePanel } from './FeaturePanel';

export default {
  title: 'Components/Layout/FeaturePanel',
  component: FeaturePanel,
} as Meta;

export const Primary: React.VFC = () => <FeaturePanel />;
