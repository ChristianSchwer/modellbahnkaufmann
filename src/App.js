import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './navbar/Navbar.js';
import Home from './sites/Home.js';
import Inventar from './sites/Inventar';
import Disclaimer from './sites/Disclaimer.js';
import Legal from './sites/Legal.js';
import Footer from './footer/Footer.js';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/inventar" element={<Inventar />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
