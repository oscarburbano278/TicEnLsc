import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ScannedPage from './ScannedPage';
import AcepReceptor from './AcepReceptor';
import EnviarAudio from './EnviarAudio';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/scanned" element={<ScannedPage/>} />

          
          <Route path="/acepR" element={<AcepReceptor/>} />

          <Route path="/enviarA" element={<EnviarAudio/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
