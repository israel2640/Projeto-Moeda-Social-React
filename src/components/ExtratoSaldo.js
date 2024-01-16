import React, { useState, useEffect, useMemo, useRef } from 'react';
import Chart from 'chart.js/auto';

import './ExtratoSaldo.css';

const ExtratoSaldo = () => {
    const [mesSelecionado, setMesSelecionado] = useState('Janeiro 2024');
    const canvasRef = useRef(null);
    const myChartRef = useRef(null);

    const extratoData = useMemo(() => {
        if (mesSelecionado === 'Janeiro 2024') {
            return [
                { data: '05-01-2024T10:30:00', descricao: 'Participação em Sala - 10:30 AM', valor: 50.0 },
                { data: '10-01-2024T15:45:00', descricao: 'Atividade no Portal - 03:45 PM', valor: 30.0 },
                // Adicione mais itens ao extrato conforme necessário
            ];
        } else if (mesSelecionado === 'Fevereiro 2024') {
            return [
                { data: '05-02-2024T12:00:00', descricao: 'Atividade em Grupo - 12:00 PM', valor: 700.0 },
                { data: '12-02-2024T14:30:00', descricao: 'Presença em sala de aula - 02:30 PM', valor: 400.0 },
                // Adicione mais itens ao extrato de fevereiro conforme necessário
            ];
        }

        // Adicione mais lógica para outros meses, se necessário
        return [];
    }, [mesSelecionado]);

    const handleSelecionarMes = (event) => {
        setMesSelecionado(event.target.value);
    };

    useEffect(() => {
        const ctx = canvasRef.current;

        // Verificar se o contexto do canvas está disponível
        if (ctx) {
            const ctxContext = ctx.getContext('2d');

            // Destruir gráfico anterior, se existir
            if (myChartRef.current) {
                myChartRef.current.destroy();
            }

            const newChart = new Chart(ctxContext, {
                type: 'bar',
                data: {
                    labels: extratoData.map((item) => item.data),
                    datasets: [
                        {
                            label: 'Valores',
                            data: extratoData.map((item) => item.valor),
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false,
                            suggestedMin: 0,
                        },
                    },
                    elements: {
                        bar: {
                            borderWidth: 1,
                            borderColor: 'white', // Adicione a cor branca para a borda
                        },
                    },
                },
            });

            // Armazenar a referência ao novo gráfico
            myChartRef.current = newChart;

            // Lembre-se de destruir o gráfico ao desmontar o componente ou quando necessário
            return () => {
                newChart.destroy();
            };
        }
    }, [extratoData, mesSelecionado]);

    return (
        <div className="extrato-saldo-top-container">
            <div className="extrato-saldo-container">
                <h2>Extrato de Saldo</h2>
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

                <p>Seu Saldo Atual: R$ {920.0.toFixed(2)} Criptomoedas</p>

                <table className="extrato-tabela">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {extratoData.map((item) => (
                            <tr key={item.data}>
                                <td>{item.data}</td>
                                <td>{item.descricao}</td>
                                <td>R$ {item.valor.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Adicione um elemento de tela para o gráfico */}
                <canvas ref={canvasRef} width="400" height="200"></canvas>
            </div>
        </div>
    );
};

export default ExtratoSaldo;
