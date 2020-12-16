import * as React from 'react';
import { FeaturePanel } from '../feature-panel/FeaturePanel';
import { Footer } from '../footer/Footer';
import { Hero } from '../hero/Hero';
import { Navbar } from '../navbar/Navbar';
import { ReviewPanel } from '../review-panel/ReviewPanel';
import { TeamMemberPanel } from '../team-member-panel/TeamMemberPanel';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
`;

export const Landing: React.FC = (): JSX.Element => {
  return (
    <Container role="application">
      <Navbar />
      <Hero />
      <ReviewPanel />
      <FeaturePanel />
      <TeamMemberPanel />
      <Footer />
    </Container>
  );
};
