import * as React from 'react';
import styled from '@emotion/styled';

type ContentProps = {
  reverse: boolean;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 2vh;
`;

const Content = styled.div<ContentProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  width: 80%;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 40%;
`;

const Screenshot = styled.img`
  width: 83.3vh;
  height: 48vh;
  background: #f89d9d 0% 0% no-repeat padding-box;
  border-radius: 2vh;
  opacity: 1;
  margin: 2vh 0vh;
`;

const Title = styled.h1`
  width: 40vh;
  text-align: left;
  font: normal normal bold 4vh/5.3vh Inter;
  letter-spacing: 0vh;
  color: #1b1b1b;
  opacity: 1;
`;

const Description = styled.p`
  width: 40vh;
  text-align: left;
  font: normal normal normal 2vh/2.7vh Inter;
  letter-spacing: 0vh;
  color: #1b1b1b;
  opacity: 1;
  word-wrap: break-word;
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
