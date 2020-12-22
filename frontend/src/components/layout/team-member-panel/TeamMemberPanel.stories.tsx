import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { TeamMemberPanel } from './TeamMemberPanel';

export default {
  title: 'Components/Layout/TeamMemberPanel',
  component: TeamMemberPanel,
} as Meta;

export const Primary: React.VFC = () => <TeamMemberPanel />;
