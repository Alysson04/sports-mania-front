import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiFilter, FiSearch } from 'react-icons/fi'; // Importando ícones
import './funcionarios.css';
import { FaUserTie } from "react-icons/fa";

const Funcionarios = [
  {
    id: 1,
    nome: 'João Silva',
    contato: '(11) 98765-4321',
    cpf: '123.456.789-00',
    endereco: 'Rua A, 123, São Paulo',
    cargo: 'Gerente',
  },
  {
    id: 2,
    nome: 'Maria Oliveira',
    contato: '(21) 91234-5678',
    cpf: '987.654.321-00',
    endereco: 'Avenida B, 456, Rio de Janeiro',
    cargo: 'Analista',
  },
  {
    id: 3,
    nome: 'Carlos Silva',
    contato: '(81) 98589-4321',
    cpf: '123.456.789-00',
    endereco: 'Rua A, 123, Pernambuco',
    cargo: 'Assistente',
  },
  {
    id: 4,
    nome: 'Joana Pereira',
    contato: '(82) 91234-7165',
    cpf: '987.654.321-00',
    endereco: 'Avenida B, 456, Pará',
    cargo: 'Técnico',
  },
];

function FuncionariosPage() {
  const [showCadastro, setShowCadastro] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCadastro = () => {
    setShowCadastro(!showCadastro);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const renderForm = () => (
    <div className="form-container">
      <h2 className="form-title">Cadastrar Funcionário</h2>
      <form className="form">
        <div className="row">
          <div className="input-group">
            <label htmlFor="nome" className="label">
              Nome <span className="required">*</span>
            </label>
            <input id="nome" type="text" className="input" />
          </div>
          <div className="input-group">
            <label htmlFor="contato" className="label">
              Contato <span className="required">*</span>
            </label>
            <input id="contato" type="text" className="input" />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label htmlFor="cpf" className="label">
              CPF <span className="required">*</span>
            </label>
            <input id="cpf" type="text" className="input" />
          </div>
          <div className="input-group">
            <label htmlFor="endereco" className="label">
              Endereço <span className="required">*</span>
            </label>
            <input id="endereco" type="text" className="input" />
          </div>
          <div className="input-group">
          </div>
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={() => setShowCadastro(false)}
          >
            Cancelar
          </button>
          <button type="submit" className="button-primary">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );

  const renderTable = () => (
    <>
      <div className="divProdutos">
        <h2 className="content-title">
          <FaUserTie style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Funcionários
        </h2>
      </div>
      <div className="toolbar">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar funcionários"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-btn">
            <FiSearch size={18} />
          </button>
        </div>
        <button className="add-btn" onClick={toggleCadastro}>
          <AiOutlinePlusCircle size={18} /> Adicionar Funcionário
        </button>
      </div>
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Contato</th>
              <th>CPF</th>
              <th>Endereço</th>
            
            </tr>
          </thead>
          <tbody>
            {Funcionarios.filter((funcionario) =>
              funcionario.nome.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((funcionario) => (
              <tr key={funcionario.id}>
                <td>{funcionario.id}</td>
                <td>{funcionario.nome}</td>
                <td>{funcionario.contato}</td>
                <td>{funcionario.cpf}</td>
                <td>{funcionario.endereco}</td>
             
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  return <div>{showCadastro ? renderForm() : renderTable()}</div>;
}

export default FuncionariosPage;
