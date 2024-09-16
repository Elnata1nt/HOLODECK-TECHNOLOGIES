// src/AppRouter.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Homepage";
import CommunityJoin from "./pages/Community/CommunityJoin";
import Projects from "./pages/Projects/Projects";
import Events from "./pages/EventsHolo/Events";
import Store from "./pages/Store/Shopping";
import Blog from "./pages/Blog/Blogpage";
import Collaborator from "./pages/Collaborator/Collaborator.jsx";
import Login from "./pages/Auth/LoginPage";
import Register from "./pages/Auth/RegisterPage";
import PrivacyPolicy from "./utils/validators/PrivacyPolicy";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/communityjoin" element={<CommunityJoin />} />
        <Route path="/Collaborator" element={<PrivateRoutes />}>
          <Route path="/Collaborator" element={<Collaborator />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blog />} />
        {/* Adicione outras rotas conforme a estrutura das páginas */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
