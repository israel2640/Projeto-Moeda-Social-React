import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import './Cadastro.css';

const CadastroUsuario = () => {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState('');
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    nomeCurso: '',
    nomeUsuario: '',
    senha: '',
    confirmeSenha: '',
    email: '',
    celular: '',
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setDadosFormulario({ ...dadosFormulario, [id]: value });
  };

  const enviarDados = () => {
    try {
      // Verificar se algum campo está vazio
      const camposVazios = Object.values(dadosFormulario).some(value => value === '');

      if (camposVazios) {
        setMensagem('Por favor, preencha todos os campos.');
        return;
      }

      // Verificar se as senhas coincidem
      if (dadosFormulario.senha !== dadosFormulario.confirmeSenha) {
        setMensagem('As senhas não coincidem.');
        return;
      }

      // Mostrar os dados no console
      console.group('Dados Enviados');
      console.log('Nome:', dadosFormulario.nome);
      console.log('Nome do Curso:', dadosFormulario.nomeCurso);
      console.log('Nome de Usuário:', dadosFormulario.nomeUsuario);
      console.log('Senha:', dadosFormulario.senha);
      console.log('E-mail:', dadosFormulario.email);
      console.log('Celular:', dadosFormulario.celular);
      console.groupEnd();

      // Limpar campos após o envio bem-sucedido
      setMensagem('Dados enviados com sucesso!');
      setTimeout(() => {
        setMensagem('');
        setDadosFormulario({
          nome: '',
          nomeCurso: '',
          nomeUsuario: '',
          senha: '',
          confirmeSenha: '',
          email: '',
          celular: '',
        });
      }, 5000); // Simula um atraso de 5 segundos

    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setMensagem('Erro ao enviar dados. Por favor, tente novamente.');
    }
  };

  return (
    <div className="cadastro-usuario-container">
      <center><h1>Cadastro de Usuário</h1></center>

      <div className="nome-container">
        <label htmlFor="nome">Nome e Sobrenome:</label>
        <input type="text" id="nome" placeholder="Digite seu nome e sobrenome" value={dadosFormulario.nome} onChange={handleChange} />
      </div>

      <div className="dados-curso-container">
        <label htmlFor="nomeCurso">Nome do Curso:</label>
        <input type="text" id="nomeCurso" placeholder="Digite o nome do curso" value={dadosFormulario.nomeCurso} onChange={handleChange} />

        <label htmlFor="nomeUsuario">Matrícula:</label>
        <input type="text" id="nomeUsuario" placeholder="Digite seu nome de usuário" value={dadosFormulario.nomeUsuario} onChange={handleChange} />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" placeholder="Digite sua senha" value={dadosFormulario.senha} onChange={handleChange} />

        <label htmlFor="confirmeSenha">Confirme a Senha:</label>
        <input type="password" id="confirmeSenha" placeholder="Confirme sua senha" value={dadosFormulario.confirmeSenha} onChange={handleChange} />
      </div>

      <div className="dados-contato-container">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" value={dadosFormulario.email} onChange={handleChange} />

        <label htmlFor="celular">Celular:</label>
        <input type="tel" id="celular" placeholder="Digite seu número de celular" value={dadosFormulario.celular} onChange={handleChange} />
      </div>

      <button onClick={enviarDados}>Enviar</button>

      {/* Adiciona um botão para redirecionar para a Pagina de Login */}
      <button onClick={() => navigate('/pagina1')} className="btn-redirecionamento">
        Login
      </button>

      <div id="mensagem">{mensagem}</div>
    </div>
  );
};

export default CadastroUsuario;
