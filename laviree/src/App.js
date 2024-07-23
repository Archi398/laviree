import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navigation from './pages/Navigation';
import Home from './pages/Home';
import Lightspeed from './pages/Lightspeed';

function App() {

  return (
    <div className="py-24 w-full h-full max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/lightspeed" element={<Lightspeed />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;