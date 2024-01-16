// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Pagina1 from './components/pagina1';
import Pagina2 from './components/Pagina2';
import CadastroUsuario from './components/CadastroUsuario';
import Transferencia from './components/Transferencia';
import Pagamento from './components/Pagamento';
import AdquirirSaldo from './components/AdquirirSaldo';
import ExtratoSaldo from './components/ExtratoSaldo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="pagina1" element={<Pagina1 />} />
        <Route path="pagina2" element={<Pagina2 />} />
        <Route path="cadastro" element={<CadastroUsuario />} />
        <Route path="transferencia" element={<Transferencia />} />
        <Route path="pagamento" element={<Pagamento />} />
        <Route path="saldo" element={<AdquirirSaldo />} />
        <Route path="extrato" element={<ExtratoSaldo />} />
        <Route path="/" element={<Navigate to="pagina1" />} />
      </Routes>
    </Router>
  );
}

export default App;
