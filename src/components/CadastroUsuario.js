import React, { useState } from 'react';
import './Cadastro.css';

const CadastroUsuario = () => {
  const [previewFoto, setPreviewFoto] = useState('./img/Add_Image.png');
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

  const previewImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewFoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setDadosFormulario({ ...dadosFormulario, [id]: value });
  };

  const enviarDados = async () => {
    // Verificar se todos os campos estão preenchidos
    for (const key in dadosFormulario) {
      if (dadosFormulario[key] === '') {
        setMensagem('Por favor, preencha todos os campos.');
        return;
      }
    }

    // Verificar se as senhas coincidem
    if (dadosFormulario.senha !== dadosFormulario.confirmeSenha) {
      setMensagem('As senhas não coincidem.');
      return;
    }

    // Simular uma requisição assíncrona
    setMensagem('Enviando dados... Aguarde.');
    try {
      await enviarDadosParaServidor(dadosFormulario);
      setMensagem('Dados enviados com sucesso! Aguarde até 48h para a liberação do login.');

      // Limpar campos após o envio bem-sucedido
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
        setPreviewFoto('./img/Add_Image.png');
      }, 5000); // Simula um atraso de 5 segundos (você pode ajustar conforme necessário)
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setMensagem('Erro ao enviar dados. Por favor, tente novamente.');
    }
  };

  const enviarDadosParaServidor = (dados) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor
        // Simulando o sucesso
        resolve();
        // Simulando um erro
        // reject(new Error('Erro no servidor'));
      }, 2000); // Simula um atraso de 2 segundos
    });
  };

  const abrirNovaPagina = () => {
    // Aqui você pode adicionar a lógica para redirecionar para a página de login
    // Dependendo do sistema de roteamento que você está usando
    console.log('Redirecionando para a página de login...');
  };

  return (
    <div className="cadastro-usuario-container">
      <center><h1>Cadastro de Usuário</h1></center>

      {/* Carregar a foto do usuário */}
      <div className="foto-container">
        <label htmlFor="inputFoto" className="foto-label">
          <img id="previewFoto" src={previewFoto} alt="Foto do Usuário" />
          <span></span>
        </label>
        <input type="file" id="inputFoto" accept="image/*" onChange={previewImage} />
      </div>

      {/* Nome e sobrenome */}
      <div className="nome-container">
        <label htmlFor="inputNome">Nome e Sobrenome:</label>
        <input type="text" id="inputNome" placeholder="Digite seu nome e sobrenome" onChange={handleChange} />
      </div>

      {/* Dados do Curso */}
      <div className="dados-curso-container">
        <label htmlFor="inputNomeCurso">Nome do Curso:</label>
        <input type="text" id="inputNomeCurso" placeholder="Digite o nome do curso" onChange={handleChange} />

        <label htmlFor="inputNomeUsuario">Matrícula:</label>
        <input type="text" id="inputNomeUsuario" placeholder="Digite seu nome de usuário" onChange={handleChange} />

        <label htmlFor="inputSenha">Senha:</label>
        <input type="password" id="inputSenha" placeholder="Digite sua senha" onChange={handleChange} />

        <label htmlFor="inputConfirmeSenha">Confirme a Senha:</label>
        <input type="password" id="inputConfirmeSenha" placeholder="Confirme sua senha" onChange={handleChange} />
      </div>

      {/* Dados de Contato */}
      <div className="dados-contato-container">
        <label htmlFor="inputEmail">E-mail:</label>
        <input type="email" id="inputEmail" placeholder="Digite seu e-mail" onChange={handleChange} />

        <label htmlFor="inputCelular">Celular:</label>
        <input type="tel" id="inputCelular" placeholder="Digite seu número de celular" onChange={handleChange} />
      </div>

      {/* Botão para enviar dados ao back-end */}
      <button onClick={enviarDados}>Enviar</button>
      <button onClick={abrirNovaPagina}>Login</button>

      {/* Div para exibir a mensagem */}
      <div id="mensagem">{mensagem}</div>
    </div>
  );
};

export default CadastroUsuario;
