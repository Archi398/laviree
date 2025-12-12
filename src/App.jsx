import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Navigation from './pages/Navigation';
import Home from './pages/Home';
import Infos from './pages/Infos';
import Actulites from './pages/Actulites';
import LineUp from './pages/LineUp';
import Exposition from './pages/Exposition';
import After from './pages/After';
import Artistes from './pages/Artistes';
import Edition from './pages/Edition';
import Association from './pages/Association';
import Equipe from './pages/Equipe';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/infos" element={<Infos />} />
          <Route path="/actualites" element={<Actulites />} />
          <Route path="/line-up" element={<LineUp />} />
          <Route path="/court-metrages" element={<Exposition />} />
          <Route path="/after" element={<After />} />
          <Route path="/artistes" element={<Artistes />} />
          <Route path="/edition/2025" element={<Edition year={2025} />} />
          <Route path="/edition/2023" element={<Edition year={2023} />} />
          <Route path="/edition/2022" element={<Edition year={2022} />} />
          <Route path="/edition/2021" element={<Edition year={2021} />} />
          <Route path="/association" element={<Association />} />
          <Route path="/equipe" element={<Equipe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;