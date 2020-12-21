import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex justify-center w-full my-8`};
`;

type ContentProps = {
  reverse: boolean;
};
const Content = styled.div<ContentProps>`
  ${tw`flex justify-between items-start w-4/5`};
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
`;

const TextContainer = styled.div`
  ${tw`flex justify-center flex-col w-8/12 ml-16`};
`;

const Screenshot = styled.img`
  ${tw`bg-red-300 rounded-lg my-4`};
  width: 83.3vh;
  height: 48vh;
`;

const Title = styled.h1`
  ${tw`text-left w-5/12 text-3xl font-bold`};
  font-family: Inter;
`;

const Description = styled.p`
  ${tw`w-6/12 text-left mt-3`};
  font: normal normal normal 2vh/2.7vh Inter;
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
