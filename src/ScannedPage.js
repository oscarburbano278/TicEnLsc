import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Asegúrate de importar el archivo CSS

const ScannedPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simular la lectura del código QR y abrir el modal
    setIsModalOpen(true);
  }, []);

  const handleAccept = () => {
    // Redirigir a la página de chat con el nombre ingresado
    navigate('/chat', { state: { name } });
  };

  const handleCancel = () => {
    // Cerrar el modal
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <img src="/imgConversation.jpg" alt="Ayuda" className="imageConv" />
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <label htmlFor="nombre">Ingrese su nombre :</label>
            <input
              type="text"
              id="nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <hr />
            <div className="btnM">
              <button onClick={handleAccept}>Aceptar</button>
              <button onClick={handleCancel}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScannedPage;