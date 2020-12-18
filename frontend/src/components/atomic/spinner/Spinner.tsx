import * as React from 'react';
import styled from '@emotion/styled';
import ClipLoader from 'react-spinners/ClipLoader';

export interface SpinnerProps {
  state: boolean;
}

type Display = {
  visibility: string;
};

const Container = styled.div<Display>`
  display: ${(props) => props.visibility};
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  width: 100vh;
  position: absolute;
`;

export const Spinner: React.FC<SpinnerProps> = ({
  state,
}: SpinnerProps): JSX.Element => {
  return (
    <Container
      visibility={state ? 'flex' : 'none'}
      role="alert"
      aria-busy="true"
    >
      <ClipLoader size={'10vh'} color={'#CE3131'} loading={state} />
    </Container>
  );
};
