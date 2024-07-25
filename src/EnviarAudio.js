import React from 'react';


function EnviarAudio() {
  const headerStyle = {
    background: ' #4BBBFB ',
    padding: '20px',
    color: 'white',
  };

  return (
    <div className='container'>
        <div className='headerP'>
            <div style={headerStyle}>
            <img src="user.png" alt="imguser" className='imagUser'/>
            <label>usuario ######</label>
        </div>
    
      </div>        
          <div>
            <img src="microfono.png" alt="Microf" className='imagMicrof'/>
          <div>

          <p>Envia tu mensaje</p> 

          <div className='chat'>          
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnviarAudio;
