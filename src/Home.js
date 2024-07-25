import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header>
        <img src="/logoLsc.png" alt="Logotipo de la App" className="logo" />
        <h1>Comunícate conmigo</h1>
      </header>

      <main>
        <div className="qr-section">
          <Link to="/scanned">
            <img src="/qr-code.png" alt="Código QR" className="qr-code" />
          </Link>
          <p>Escanea para comenzar</p>
        </div>
      </main>

      <footer>
        <p>"conecta personas oyentes y personas sordas con facilidad"</p>
        <div className="help-icon">
          <img src="/signoP.png" alt="Ayuda" className="help-image" />
        </div>
      </footer>
    </div>
  );
}

export default Home;
