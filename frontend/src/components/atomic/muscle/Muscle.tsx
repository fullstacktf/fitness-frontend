import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex justify-center items-start w-full border-b border-gray-300 capitalize`};
`;

export interface MuscleProps {
  name: string;
}

export const Muscle: React.FC<MuscleProps> = (MuscleProps) => {
  return <Container>{MuscleProps.name}</Container>;
};
