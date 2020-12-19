import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex justify-center w-full`};
`;
type ContentProps = {
  reverse: boolean;
};

const Content = styled.div<ContentProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  width: 80%;
`;
const TextContainer = styled.div`
  ${tw`flex justify-center flex-col w-5/12`};
`;

const Screenshot = styled.img`
  ${tw`bg-red-300 rounded-lg my-4`};
  width: 80.4vh;
  height: 52.6vh;
`;
const Title = styled.h1`
  ${tw`text-left w-4/12 text-3xl font-bold`};
  font-family: Inter;
`;

const Description = styled.p`
  ${tw`w-4/12 text-left text-xs mt-3`};
  font-family: Inter;
`;

export interface FeatureProps {
  screenshotRoute: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export const Feature: React.FC<FeatureProps> = (FeatureProps): JSX.Element => {
  return (
    <Container>
      <Content reverse={FeatureProps.reverse ?? false}>
        <TextContainer>
          <Title>{FeatureProps.title}</Title>
          <Description>{FeatureProps.description}</Description>
        </TextContainer>
        <Screenshot src={FeatureProps.screenshotRoute} alt="" />
      </Content>
    </Container>
  );
};
