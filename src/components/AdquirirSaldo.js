import React, { useState } from 'react';
import './AdquirirSaldo.css';

const AdquirirSaldo = () => {
    const [valorAdquirido, setValorAdquirido] = useState('');
    const [saldoAtual, setSaldoAtual] = useState(1000);
    const [solicitacaoAprovada, setSolicitacaoAprovada] = useState(false);

    const handleAdquirir = () => {
        // Lógica para processar a solicitação
        const valorNumerico = parseFloat(valorAdquirido);
        if (valorNumerico > 0) {
            setSolicitacaoAprovada(true);
        }
    };

    const handleConfirmar = () => {
        setSaldoAtual(saldoAtual + parseFloat(valorAdquirido));
        setSolicitacaoAprovada(false);
        setValorAdquirido('');
    };

    return (
        <div className="adquirir-saldo-container">
            {solicitacaoAprovada ? (
                <div className="mensagem-aprovada">
                    Parabéns! Sua solicitação foi aprovada do <br /> Softex Banco de Moeda Virtual!
                    <p>
                        Valor solicitado: R$ {parseFloat(valorAdquirido).toFixed(2)}
                        <br />
                        Data e Hora: {new Date().toLocaleString()}
                    </p>
                    <button onClick={handleConfirmar}>Confirmar Saldo</button>
                </div>
            ) : (
                <div className="formulario-adquirir-saldo">
                    <h2>Adquirir Saldo</h2>
                    <label htmlFor="valorAdquirido">Valor a Adquirir:</label>
                    <input
                        type="number"
                        id="valorAdquirido"
                        value={valorAdquirido}
                        onChange={(e) => setValorAdquirido(e.target.value)}
                    />

                    <button type="button" onClick={handleAdquirir}>
                        Adquirir
                    </button>

                    <p>Seu Saldo Atual: R$ {saldoAtual.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default AdquirirSaldo;
