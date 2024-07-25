import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <img src="/logoLsc.png" alt="Logotipo de la App" className="logo" />
        <h1>Comunícate conmigo</h1>
      </header>

      <main>
        <div className="qr-section">
          <img src="/qrEnsayo.png" alt="Código QR" className="qr-code" />
          <p>Escanea para comenzar</p>
        </div>
      </main>

      <footer>
        <p>"conecta personas oyentes y personas sordas con facilidad"</p>
        <div className="help-icon">
        <img src="/signoP.png" alt="ayuda" className="help-image" />
        </div>
      </footer>
    </div>
  );
}

export default App;
