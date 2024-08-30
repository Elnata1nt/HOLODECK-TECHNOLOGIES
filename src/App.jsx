// src/App.jsx
import React from "react";
import AppRouter from "./router";
// import BackgroundParticles from "./components/Header-componets/Header"; 
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer"; // Importe o Footer
import '@/styles/index.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* <BackgroundParticles /> */}
      <div className="flex-grow relative z-10">
      <Header />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
};

export default App;
