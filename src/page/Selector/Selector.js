import React from 'react';
import './Selector.css';


const Selector = () => {

return (
    <div className="container">
        <a className="cardCorreo" href="/login">
            <div className="cardCorreo-image"></div>
            <div className="cardCorreo-text">
                <h2>Correo Electronico</h2>
            </div>
        </a>
        <a className="cardChat" href="/login">
            <div className="cardChat-image"></div>
            <div className="cardChat-text">
                <h2>Chat</h2>
            </div>
        </a>
    </div>
  );
}
  

export default Selector;