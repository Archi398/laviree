import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navigation from './pages/Navigation';
import InfoActu from './pages/InfoActu';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/infos-actu" element={<InfoActu />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
