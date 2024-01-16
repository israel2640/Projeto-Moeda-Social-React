// Transferencia.js
import React, { useState } from 'react';
import './Transferencia.css';

const Transferencia = () => {
  const [destinatario, setDestinatario] = useState('');
  const [valor, setValor] = useState('');
  const [saldoAtual, setSaldoAtual] = useState(1000);
  const [transferenciaRealizada, setTransferenciaRealizada] = useState(false);
  const [saldoInsuficiente, setSaldoInsuficiente] = useState(false);

  const handleTransferir = () => {
    const valorNumerico = parseFloat(valor);
    if (valorNumerico > 0 && saldoAtual >= valorNumerico) {
      setSaldoAtual(saldoAtual - valorNumerico);
      setTransferenciaRealizada(true);
    } else {
      setSaldoInsuficiente(true);
    }
  };

  const handleConfirmar = () => {
    setTransferenciaRealizada(false);
    setDestinatario('');
    setValor('');
    setSaldoInsuficiente(false);
  };

  return (
    <div className="transferencia-container">
      {transferenciaRealizada ? (
        <div className="mensagem-sucesso">
          Transferência realizada com sucesso para {destinatario}!
          <p>
            Valor transferido: R$ {parseFloat(valor).toFixed(2)}
            <br />
            Data e Hora: {new Date().toLocaleString()}
          </p>
          <button onClick={handleConfirmar}>Confirmar Transferência</button>
        </div>
      ) : (
        <form className="formulario-transferencia">
          <h2>Transferir Saldo</h2>
          <label htmlFor="destinatario">Destinatário:</label>
          <input
            type="text"
            id="destinatario"
            value={destinatario}
            onChange={(e) => setDestinatario(e.target.value)}
          />

          <label htmlFor="valor">Valor a Transferir:</label>
          <input
            type="number"
            id="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />

          <button type="button" onClick={handleTransferir}>
            Transferir
          </button>

          {saldoInsuficiente && (
            <p className="mensagem-erro">Você não possui saldo suficiente para realizar essa transação.</p>
          )}

          <p>Seu Saldo Atual: R$ {saldoAtual.toFixed(2)}</p>
        </form>
      )}
    </div>
  );
};

export default Transferencia;
