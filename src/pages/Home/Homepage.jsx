// src/pages/Home.jsx
import React from "react";
import WelcomeSection from "../../components/Homecomponets/WelcomeSection";
import CommunitySection from "../../components/Homecomponets/CommunitySection";
import SocialProofPress from "../../components/ui-components/SocialProofPress";
import { quotes } from "../../data/quotes";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <WelcomeSection />
      <CommunitySection />
      <SocialProofPress quotes={quotes} />
    </div>
  );
};

export default Home;
