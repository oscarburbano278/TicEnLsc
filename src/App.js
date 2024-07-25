import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ScannedPage from './ScannedPage';
import AcepReceptor from './AcepReceptor';
import EnviarAudio from './EnviarAudio';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/scanned" element={<ScannedPage />} />
          <Route path="/acepR" element={<AcepReceptor />} />
          <Route path="/enviarA" element={<EnviarAudio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
