// import React from "react";
// import AppRouter from "./router";
// import Header from "./components/Layout/Header";
// import Footer from "./components/Layout/Footer";
// import '@/styles/index.css';

// const App = () => {
//   return (
//     <div className="flex flex-col min-h-screen relative">
//       <div className="flex-grow relative z-10">
//       <Header />
//         <AppRouter />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;

// src/App.jsx
import React from "react";
import AppRouter from "./router";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { AuthProvider } from "./contexts/AuthContext"; // Certifique-se de ajustar o caminho, se necessário.
import "@/styles/index.css";

const App = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <div className="flex-grow relative z-10">
          <AppRouter />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
