import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pagina2.css';

const Pagina2 = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div>
      <div className="navbar">
        <div className={`menu-icon ${menuVisible ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`menu ${menuVisible ? 'open' : ''}`}>
          <li>
            <Link to="/" className="menu-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/pagamento" className="menu-link" onClick={closeMenu}>
              Pagamento
            </Link>
          </li>
          <li>
            <Link to="/transferencia" className="menu-link" onClick={closeMenu}>
              Transferência
            </Link>
          </li>
          <li>
            <Link to="/extrato" className="menu-link" onClick={closeMenu}>
              Extrato
            </Link>
          </li>
          <li>
            <Link to="/saldo" className="menu-link" onClick={closeMenu}>
              Adquirir Moeda
            </Link>
          </li>
        </ul>
      </div>

      <div className="saldo-container">
        <span id="saldo" className="saldo">
          Saldo: R$ 1000,00
        </span>
      </div>

      {/* Adicionando imagens */}
      <div className="image-container">
        <Link to="/transferencia">
          <img src="transferir.png" alt="transferencia" />
          <p>Transferência</p>
        </Link>
        <Link to="/pagamento">
          <img src="pagar.png" alt="Pagamento" />
          <p>Pagar</p>
        </Link>
        <Link to="/extrato">
          <img src="extrato.png" alt="extrato" />
          <p>Extrato</p>
        </Link>
        <Link to="/saldo">
          <img src="receber_moedas.png" alt="Adquirir Moedas" />
          <p>Adquirir Moedas</p>
        </Link>
      </div>
    </div>
  );
};

export default Pagina2;
