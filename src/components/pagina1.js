// Pagina1.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Pagina1.css';

const Pagina1 = () => {
  const navigate = useNavigate();
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const realizarLogin = () => {
    // Lógica para realizar o login
    if (matricula === '123456' && senha === '1234') {
      // Redireciona para a Pagina2 se a matrícula e senha estiverem corretas
      navigate('/pagina2');
    } else {
      alert('Login ou senha inválidos.');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Moeda Social</h1>
        <form action="#" method="post" id="loginForm">
          <label htmlFor="matricula">Matrícula:</label>
          <input type="text" id="matricula" name="matricula" value={matricula} onChange={(e) => setMatricula(e.target.value)} required />

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />

          <button type="button" onClick={realizarLogin}>Login</button>
        </form>

        <p>Não tem uma conta? <Link to="/cadastro" id="inscrevaSeLink">Inscreva-se</Link></p>
      </div>
    </div>
  );
}

export default Pagina1;