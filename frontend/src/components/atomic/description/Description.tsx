import * as React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  font: normal normal normal 2.4vh/4vh Inter;
  color: #1b1b1b;
  line-height: 4vh;
  margin-left: 20vh;
`;

export interface DescriptionProps {
  text: string;
}

export const Description: React.FC<DescriptionProps> = (
  DescriptionProps
): JSX.Element => {
  return (
    <div>
      <P>{DescriptionProps.text}</P>
    </div>
  );
};
