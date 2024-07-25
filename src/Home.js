import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const socketUrl = process.env.REACT_APP_API_URL;
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const fetchQrCode = async () => {
    try {
      const response = await axios.get(socketUrl+'/generate_qr', {
        responseType: 'blob',
      });
      const qrCodeBlob = new Blob([response.data], { type: 'image/png' });
      const qrCodeUrl = URL.createObjectURL(qrCodeBlob);
      setQrCodeUrl(qrCodeUrl);
    } catch (error) {
      console.error('Error fetching QR code:', error);
    }
  };

  useEffect(() => {
    fetchQrCode();
  }, []);

  return (
    <div>
      <header>
        <img src="/logoLsc.png" alt="Logotipo de la App" className="logo" />
        <h1>Comunícate conmigo</h1>
      </header>

      <main>
        <div className="qr-section">
          <Link to="/scanned">
            {qrCodeUrl && <img src={qrCodeUrl} alt="Código QR" className="qr-code" />}
          </Link>
          <p>Escanea para comenzar</p>
          <button onClick={fetchQrCode}>Actualizar Código QR</button>
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
};

export default Home;
