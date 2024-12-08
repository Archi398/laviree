import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navigation from './pages/Navigation';
import Home from './pages/Home';
import InfoActu from './pages/InfoActu';
import After from './pages/After';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/infos-actu" element={<InfoActu />} />
          {/* <Route path="/line-up" element={<LineUp />} />
          <Route path="/exposition" element={<Exposition />} /> */}
          <Route path="/after" element={<After />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
