import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './navbar/Navbar.js';
import Home from './sites/Home.js';
import About from './sites/About.js';
import Inventar from './sites/Inventar';
import Footer from './footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/inventar" element={<Inventar />} />
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
