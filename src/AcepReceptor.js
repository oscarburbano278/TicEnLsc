import React from 'react';
import { Link } from 'react-router-dom';

function AcepReceptor() {
  const headerStyle = {
    background: ' #f3b1ac ',
    padding: '20px',
    color: 'white',
  };

  return (
    <div className='headerP'>
      <div style={headerStyle}>
        
      </div>        
          <div>
            <img src="mensaje.png" alt="Imagen" />
          <div>

          <p>Deseas iniciar una comunicación con ##### !!!</p> 

          <div className='btnM'>
          <Link to="/enviarA"> 
            <button style={{ color: 'black', backgroundColor: '#fa8064', border:'none', fontSize:'20px', borderRadius:'5px'}}>aceptar</button>
          </Link>
          
          <button style={{ color: 'black', backgroundColor: '#49C3DE' , border:'none', fontSize:'20px', borderRadius:'5px'}}>cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcepReceptor;
