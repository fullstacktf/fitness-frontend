import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TeamMember, TeamMemberProps } from './TeamMember';

export default {
  title: 'Components/atomic/TeamMember',
  component: TeamMember,
} as Meta;

const Template: Story<TeamMemberProps> = (args) => <TeamMember {...args} />;

export const Primary = Template.bind({});
