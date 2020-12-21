import * as React from 'react';
import { FeaturePanel } from '../feature-panel/FeaturePanel';
import { Footer } from '../footer/Footer';
import { Hero } from '../hero/Hero';
import { Navbar } from '../navbar/Navbar';
import { ReviewPanel } from '../review-panel/ReviewPanel';
import { TeamMemberPanel } from '../team-member-panel/TeamMemberPanel';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`w-full`};
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
