// src/pages/Home.jsx
import React from "react";
import WelcomeSection from "../../components/Homecomponets/WelcomeSection";
import AboutHome from "../../components/Homecomponets/AboutHome";
import SocialProofPress from "../../components/Homecomponets/SocialHome";
import Partners from "../../components/Homecomponets/Partners";
import { quotes } from "../../data/quotes";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <WelcomeSection />
      <AboutHome />
      <SocialProofPress quotes={quotes} />
      <Partners />
    </div>
  );
};

export default Home;
