import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 40%;
`;

const Screenshot = styled.img`
  width: 80.4vh;
  height: 52.6vh;
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
  direction?: 'left' | 'right';
}

export const Feature: React.FC<FeatureProps> = ({
  screenshotRoute,
  title,
  description,
  direction,
}: FeatureProps): JSX.Element => {
  let content: JSX.Element;
  if (direction === 'right') {
    content = (
      <Container>
        <Content>
          <Screenshot src={screenshotRoute} alt="" />
          <TextContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </TextContainer>
        </Content>
      </Container>
    );
  } else {
    content = (
      <Container>
        <Content>
          <TextContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </TextContainer>
          <Screenshot src={screenshotRoute} alt="" />
        </Content>
      </Container>
    );
  }
  return content;
};
