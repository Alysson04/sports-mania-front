import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';
import './entradas.css';
import '../../../src/index.css';
import { FaArrowRight } from "react-icons/fa";

const Entradas = [
  {
    id: 1,
    produtos: 'Tênis Esportivo',
    quantidade: 30,
    fornecedor: 'Fornecedor A',
    dataEmissao: '2024-12-01',
    dataEntrada: '2024-12-05',
    notaFiscal: '123456',
    valorNota: 4500.0,
  },
  {
    id: 2,
    produtos: 'Camiseta Esportiva',
    quantidade: 80,
    fornecedor: 'Fornecedor B',
    dataEmissao: '2024-11-28',
    dataEntrada: '2024-12-02',
    notaFiscal: '789012',
    valorNota: 2400.0,
  },
];

function EntradasPage() {
  const [showCadastro, setShowCadastro] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCadastro = () => setShowCadastro(!showCadastro);

  const handleSearchChange = (event) => setSearchQuery(event.target.value);

  const renderForm = () => (
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}>Nova Entrada</h2>
      <form style={styles.form}>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label htmlFor="nome" style={styles.label}>
              Nome <span style={styles.required}>*</span>
            </label>
            <input id="nome" type="text" style={styles.input} />
          </div>
        </div>
        <div style={styles.row}>
        <div style={styles.inputGroup}>
            <label htmlFor="Quantidade" style={styles.label}>
              Quantidade <span style={styles.required}>*</span>
            </label>
            <input id="quantidade" type="number" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="fornecedor" style={styles.label}>
              Fornecedor <span style={styles.required}>*</span>
            </label>
            <input id="fornecedor" type="text" style={styles.input} />
          </div>
        
        
        
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label htmlFor="dataDeEmissao" style={styles.label}>
              Data de emissão<span style={styles.required}>*</span>
            </label>
            <input id="dataDeEmissao" type="date" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="dataDeEntrada" style={styles.label}>
              Data de Entrada <span style={styles.required}>*</span>
            </label>
            <input id="dataDeEntrada" type="text" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="notaFiscal" style={styles.label}>
              Nota fiscal <span style={styles.required}>*</span>
            </label>
            <input id="notaFiscal" type="text" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="valornotaFiscal" style={styles.label}>
              Valor da nota <span style={styles.required}>*</span>
            </label>
            <input id="valornotaFiscal" type="double" style={styles.input} />
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <button type="button" style={styles.button} onClick={toggleCadastro}>
            Cancelar
          </button>
          <button type="submit" style={styles.buttonPrimary}>
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
    <FaArrowRight style={{ marginRight: '8px', verticalAlign: 'middle' }} />
    Entradas
  </h2>
</div>


      <div className="toolbar">
      
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar entradas"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-btn">
          
          </button>
        </div>
        <button className="add-btn" onClick={toggleCadastro}>
          <AiOutlinePlusCircle size={18} /> Adicionar Entrada
        </button>
      </div>

      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Produtos</th>
              <th>Quantidade</th>
              <th>Fornecedor</th>
              <th>Data de Emissão</th>
              <th>Data de Entrada</th>
              <th>Nota Fiscal</th>
              <th>Valor da Nota (R$)</th>
            </tr>
          </thead>
          <tbody>
            {Entradas.filter((entrada) =>
              entrada.produtos.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((entrada) => (
              <tr key={entrada.id}>
                <td>{entrada.id}</td>
                <td>{entrada.produtos}</td>
                <td>{entrada.quantidade}</td>
                <td>{entrada.fornecedor}</td>
                <td>{entrada.dataEmissao}</td>
                <td>{entrada.dataEntrada}</td>
                <td>{entrada.notaFiscal}</td>
                <td>R$ {entrada.valorNota.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  return <div>{showCadastro ? renderForm() : renderTable()}</div>;
}

const styles = {
    formContainer: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        marginTop: '20px',
      },
      formTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '20px',
      },
      row: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        alignItems: 'flex-end',
      },
      inputGroup: {
        flex: 1,
        marginRight: '10px',
      },
      inputGroupWide: {
        flex: 2,
      },
      input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '14px',
      },
      textarea: {
        width: '100%',
        height: '100px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '14px',
      },
      imageUpload: {
        flex: 1,
        textAlign: 'center',
      },
      fileInput: {
        width: '100%',
        padding: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '14px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
      },
      button: {
        backgroundColor: '#ccc',
        color: '#000',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '14px',
      },
      buttonPrimary: {
        backgroundColor: '#ff9900',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '14px',
      },
      required: {
        color: 'red',
      },
      searchContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      searchInput: {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginRight: '10px',
      },
      searchBtn: {
        backgroundColor: '#ff9900',
        border: 'none',
        borderRadius: '5px',
        padding: '8px',
        cursor: 'pointer',
      },
};

export default EntradasPage;