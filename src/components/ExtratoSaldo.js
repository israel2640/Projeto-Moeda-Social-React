import React, { useState, useMemo } from 'react';

import './ExtratoSaldo.css';

const ExtratoSaldo = () => {
  const [mesSelecionado, setMesSelecionado] = useState('Janeiro 2024');

  const extratoData = useMemo(() => {
    let extrato = [];

    if (mesSelecionado === 'Janeiro 2024') {
      extrato = [
        { dia: 2, hora: '12:57 PM', historico: 'Deposito online', valor: 160.0 },
        { dia: 10, hora: '09:00 PM', historico: 'Netflix.com', valor: -170.0 },
        // Adiciona mais itens ao extrato de janeiro conforme necessário
      ];
    } else if (mesSelecionado === 'Fevereiro 2024') {
      extrato = [
        { dia: 5, hora: '12:00 PM', historico: 'Atividade em Grupo', valor: 150.0 },
        { dia: 12, hora: '02:30 PM', historico: 'Presença em sala de aula', valor: 200.0 },
        { dia: 5, hora: '12:01 PM', historico: 'Atividade em Grupo', valor: -100.0 },
        { dia: 12, hora: '02:40 PM', historico: 'Presença em sala de aula', valor: -80.0 },
        { dia: 5, hora: '12:57 PM', historico: 'Atividade em Grupo', valor: -120.0 },
        { dia: 12, hora: '01:30 PM', historico: 'Presença em sala de aula', valor: -100.0 },
        { dia: 5, hora: '09:00 PM', historico: 'Atividade em Grupo', valor: 150.0 },
        { dia: 12, hora: '11:30 PM', historico: 'Presença em sala de aula', valor: 200.0 },
        // Adiciona mais itens ao extrato de fevereiro conforme necessário
      ];
    }
    
    // Ordenar o extrato por data e hora
    extrato.sort((a, b) => {
      if (a.dia !== b.dia) {
        return a.dia - b.dia;
      } else {
        // Separa as horas e minutos
        const [aHour, aMinute] = a.hora.split(':');
        const [bHour, bMinute] = b.hora.split(':');
        // Compara horas e minutos
        if (aHour !== bHour) {
          return aHour - bHour;
        } else {
          return aMinute - bMinute;
        }
      }
    });

    return extrato;
  }, [mesSelecionado]);

  const valorTotal = useMemo(() => {
    return extratoData.reduce((total, item) => total + item.valor, 0);
  }, [extratoData]);

  const handleSelecionarMes = (event) => {
    setMesSelecionado(event.target.value);
  };

  return (
    <div className="extrato-saldo-top-container">
      <div className="extrato-saldo-container">
        <h2 className="titulo-extrato">Extrato de Moeda Digital</h2><br />
        <p>Usuário: Israel</p>
        <p>Matrícula: 261944</p>
        <hr />
        <label htmlFor="selectMes">Selecione o mês: </label>
        <select id="selectMes" value={mesSelecionado} onChange={handleSelecionarMes}>
          <option value="Janeiro 2024">Janeiro 2024</option>
          <option value="Fevereiro 2024">Fevereiro 2024</option>
          <option value="Março 2024">Março 2024</option>
          <option value="Abril 2024">Abril 2024</option>
          <option value="Maio 2024">Maio 2024</option>
          <option value="Junho 2024">Junho 2024</option>
          <option value="Julho 2024">Julho 2024</option>
          <option value="Agosto 2024">Agosto 2024</option>
          <option value="Setembro 2024">Setembro 2024</option>
          <option value="Outubro 2024">Outubro 2024</option>
          <option value="Novembro 2024">Novembro 2024</option>
          <option value="Dezembro 2024">Dezembro 2024</option>

          {/* Adicione mais opções para outros meses */}
        </select>
        <div className="extrato-tabela-container">
          <table className="extrato-tabela">
            <thead>
              <tr>
                <th>Dia</th>
                <th>Hora</th>
                <th>Histórico</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {extratoData.map((item, index) => (
                <tr key={index}>
                  <td>{item.dia}</td>
                  <td>{item.hora}</td>
                  <td>{item.historico}</td>
                  <td style={{ color: item.valor >= 0 ? 'blue' : 'red' }}>R$ {item.valor.toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" style={{ textAlign: 'right' }}>Valor Total:</td>
                <td style={{ color: valorTotal >= 0 ? 'blue' : 'red' }}>
                  R$ {valorTotal.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExtratoSaldo;
