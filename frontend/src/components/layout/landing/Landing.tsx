import * as React from 'react';
import { FeaturePanel } from '../feature-panel/FeaturePanel';
import { Footer } from '../footer/Footer';
import { Hero } from '../hero/Hero';
import { Navbar } from '../navbar/Navbar';
import { ReviewPanel } from '../review-panel/ReviewPanel';
import { TeamMemberPanel } from '../team-member-panel/TeamMemberPanel';

export const Landing: React.FC = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ReviewPanel />
      <FeaturePanel />
      <TeamMemberPanel />
      <Footer />
    </div>
  );
};
