import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Pagina1.css';
import suaImagem from './softexB.png';
import olhoIcon from './olho2-visivel.png'; // Substitua pelo caminho real do seu ícone

const Pagina1 = () => {
  const navigate = useNavigate();
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const realizarLogin = () => {
    // Lógica para realizar o login
    if (matricula === '261944' && senha === '1944') {
      // Redireciona para a Pagina2 se a matrícula e senha estiverem corretas
      navigate('/pagina2');
    } else {
      alert('Login ou senha inválidos.');
    }
  };

// eslint-disable-next-line no-unused-vars
const alternarVisibilidadeSenha = () => {
  setMostrarSenha(!mostrarSenha);
};

  const handleMouseDown = () => {
    // Ação quando o botão do mouse é pressionado
    // Por exemplo, pode exibir a senha temporariamente
    setMostrarSenha(true);
  };

  const handleMouseUp = () => {
    // Ação quando o botão do mouse é solto
    // Por exemplo, pode esconder a senha novamente
    setMostrarSenha(false);
  };

  return (
    <div className="container">
      <img src={suaImagem} alt="Imagem no canto esquerdo superior" className="imagem-topo-esquerdo" />

      <div className="form-container">
        <h1>Moeda Social</h1>
        <form action="#" method="post" id="loginForm">
          <label htmlFor="matricula">Matrícula:</label>
          <input type="text" id="matricula" name="matricula" value={matricula} onChange={(e) => setMatricula(e.target.value)} required />

          <label htmlFor="senha">Senha:</label>
          <div className="senha-container">
            <input
              type={mostrarSenha ? 'text' : 'password'}
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <img
              src={olhoIcon}
              alt={mostrarSenha ? 'Ocultar Senha' : 'Mostrar Senha'}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className="olho-icon"
            />
          </div>

          <button type="button" onClick={realizarLogin}>
            Login
          </button>
        </form>

        <p>
          Não tem uma conta? <Link to="/cadastro" id="inscrevaSeLink">Inscreva-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Pagina1;