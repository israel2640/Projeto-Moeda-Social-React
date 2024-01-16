// Pagamento.js
import React, { useState } from 'react';
import './Pagamento.css';

const Pagamento = () => {
  const [nomeDestinatario, setNomeDestinatario] = useState('');
  const [valorPago, setValorPago] = useState('');
  const [saldoAtual, setSaldoAtual] = useState(1000);
  const [pagamentoRealizado, setPagamentoRealizado] = useState(false);
  const [saldoInsuficiente, setSaldoInsuficiente] = useState(false);

  const handlePagar = () => {
    const valorNumerico = parseFloat(valorPago);
    if (valorNumerico > 0 && saldoAtual >= valorNumerico) {
      setPagamentoRealizado(true);
    } else {
      setSaldoInsuficiente(true);
    }
  };

  const handleConfirmar = () => {
    setSaldoAtual(saldoAtual - parseFloat(valorPago));
    setPagamentoRealizado(false);
    setNomeDestinatario('');
    setValorPago('');
    setSaldoInsuficiente(false);
  };

  return (
    <div className="pagamento-container">
      {pagamentoRealizado ? (
        <div className="mensagem-sucesso">
          Pagamento realizado com sucesso para {nomeDestinatario}!
          <p>
            Valor pago: R$ {parseFloat(valorPago).toFixed(2)}
            <br />
            Data e Hora: {new Date().toLocaleString()}
          </p>
          <button onClick={handleConfirmar}>Confirmar Pagamento</button>
        </div>
      ) : (
        <div className="formulario-pagamento">
          <h2>Realizar Pagamento</h2>
          <label htmlFor="nomeDestinatario">Nome do Destinatário:</label>
          <input
            type="text"
            id="nomeDestinatario"
            value={nomeDestinatario}
            onChange={(e) => setNomeDestinatario(e.target.value)}
          />

          <label htmlFor="valorPago">Valor a Pagar:</label>
          <input
            type="number"
            id="valorPago"
            value={valorPago}
            onChange={(e) => setValorPago(e.target.value)}
          />

          <button type="button" onClick={handlePagar}>
            Pagar
          </button>

          {saldoInsuficiente && (
            <p className="mensagem-erro">Você não possui saldo suficiente para realizar essa transação.</p>
          )}

          <p>Seu Saldo Atual: R$ {saldoAtual.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Pagamento;
