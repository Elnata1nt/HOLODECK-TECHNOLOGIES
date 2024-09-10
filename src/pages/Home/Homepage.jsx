// src/pages/Home.jsx
import React from "react";
import WelcomeSection from "../../components/Homecomponets/WelcomeSection";
// import CommunitySection from "../../components/Homecomponets/HomeSection";
import SocialProofPress from "../../components/Homecomponets/SocialProofPress";
import CodeTabs from "../../components/Homecomponets/CodeTabs";
import { quotes } from "../../data/quotes";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <WelcomeSection />
      <CodeTabs />
      {/* <CommunitySection /> */}
      <SocialProofPress quotes={quotes} />
    </div>
  );
};

export default Home;
