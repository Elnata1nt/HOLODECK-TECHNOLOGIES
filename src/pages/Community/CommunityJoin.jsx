// src/pages/Collaborador.jsx
import React from "react";
import Welcomecommunity from "../../components/ComunityComponents/Welcomecommunity";
import CommunitySection from "../../components/ComunityComponents/CommunitySection";
import TokenomicsSection from "../../components/ComunityComponents/TokenomicsSection";
import Communityinfo from "../../components/ComunityComponents/Communityinfo";
// import { quotes } from "../../data/quotes";

const Collaborador = () => {
  return (
<div className="min-h-screen bg-gray-100">
      <Welcomecommunity />
      <TokenomicsSection />
      <CommunitySection />
      <Communityinfo />
    </div>
  );
};

export default Collaborador; // Exportação padrão
