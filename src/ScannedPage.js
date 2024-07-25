import React from 'react';
import { Link } from 'react-router-dom';

function ScannedPage() {
  const headerStyle = {
    background: '#4BBBFB',
    padding: '20px',
    color: 'white',


  };

  return (
    
    <div className='container'>
      <div style={headerStyle}>
        
      </div>

        <h3>Inicia una conversación</h3>
            <div>
            <img src="/imgConversation.jpg" alt="Ayuda" className="imageConv" />
            <div>

          <label htmlFor="nombre">Ingrese su nombre :</label>
          <input type="text" id="nombre" />
            <hr></hr>
            <Link to="/acepR">
                <button style={{ color: 'black', backgroundColor: '#49C3DE', border:'none', fontSize:'20px', borderRadius:'5px'}}>aceptar</button>
            </Link>

        </div>
      </div>
    </div>
    
  );
}

export default ScannedPage;
