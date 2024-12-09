import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi'; // Importando o ícone de pesquisa
import './produtos.css';
import '../../../src/index.css';

const Produtos = [
  {
    id: 1,
    nome: 'Tênis Esportivo',
    categoria: 'Calçados',
    estoque: 30,
    preço: 150.0,
    venda: 250.0,
    lucro: '66.67%',
    foto: 'https://via.placeholder.com/50', // Substitua pelo caminho da sua imagem
  },
  {
    id: 2,
    nome: 'Camiseta Esportiva',
    categoria: 'Vestuário',
    estoque: 80,
    preço: 30.0,
    venda: 60.0,
    lucro: '100%',
    foto: 'https://via.placeholder.com/50', // Substitua pelo caminho da sua imagem
  },
];

function ProdutosPage() {
  // Estado para alternar entre a tela de produtos e o formulário
  const [showCadastro, setShowCadastro] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para a pesquisa

  // Função para alternar a exibição
  const toggleCadastro = () => {
    setShowCadastro(!showCadastro);
  };

  // Função para lidar com a pesquisa
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Renderizar formulário de cadastro
  const renderForm = () => (
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}>Dados do novo produto</h2>
      <form style={styles.form}>
        {/* Linha 1 */}
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label htmlFor="referencia" style={styles.label}>
              Referência <span style={styles.required}>*</span>
            </label>
            <input id="referencia" type="text" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="nome" style={styles.label}>
              Nome <span style={styles.required}>*</span>
            </label>
            <input id="nome" type="text" style={styles.input} />
          </div>
          <div style={styles.imageUpload}>
            <label htmlFor="foto" style={styles.label}>
              Foto (Opcional)
            </label>
            <input id="foto" type="file" style={styles.fileInput} />
          </div>
        </div>
  
        {/* Linha 2 */}
        <div style={styles.row}>
          <div style={styles.inputGroupWide}>
            <label htmlFor="descricao" style={styles.label}>
              Descrição <span style={styles.required}>*</span>
            </label>
            <textarea id="descricao" style={styles.textarea}></textarea>
          </div>
        </div>
  
        {/* Linha 3 */}
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label htmlFor="categoria" style={styles.label}>
              Categoria <span style={styles.required}>*</span>
            </label>
            <select id="categoria" style={styles.input}>
              <option>Selecione</option>
            </select>
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="unidade" style={styles.label}>
              Unidade <span style={styles.required}>*</span>
            </label>
            <select id="unidade" style={styles.input}>
              <option>Selecione</option>
            </select>
          </div>
        </div>
  
        {/* Linha 4 */}
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label htmlFor="estoqueMinimo" style={styles.label}>
              Estoque Mínimo <span style={styles.required}>*</span>
            </label>
            <input id="estoqueMinimo" type="number" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="precoVenda" style={styles.label}>
              Preço Venda <span style={styles.required}>*</span>
            </label>
            <input id="precoVenda" type="text" style={styles.input} />
          </div>
        </div>
  
        {/* Botões */}
        <div style={styles.buttonContainer}>
          <button
            type="button"
            style={styles.button}
            onClick={() => setShowCadastro(false)} // Voltar para a lista
          >
            Cancelar
          </button>
          <button type="submit" style={styles.buttonPrimary}>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );

  // Renderizar tabela de produtos
  const renderTable = () => (
    <>
      <h2 className="content-title">Produtos</h2>

      {/* Toolbar com Filtro, Pesquisa e Adicionar */}
      <div className="toolbar">
        <button className="filter-btn">
          <FiFilter size={18} /> Filtrar
        </button>
        
        {/* Botão de Pesquisa */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar produtos"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-btn">
            <FiSearch size={18} />
          </button>
        </div>

        <button className="add-btn" onClick={toggleCadastro}>
          <AiOutlinePlusCircle size={18} /> Adicionar Produto
        </button>
      </div>

      {/* Tabela de Produtos */}
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th>Foto</th>
              <th>ID</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Estoque</th>
              <th>Preço</th>
              <th>Venda</th>
              <th>Lucro (%)</th>
            </tr>
          </thead>
          <tbody>
            {Produtos.filter((produto) =>
              produto.nome.toLowerCase().includes(searchQuery.toLowerCase()) // Filtrando pela pesquisa
            ).map((produto) => (
              <tr key={produto.id}>
                <td>
                  <img
                    src={produto.foto}
                    alt={produto.nome}
                    className="product-image"
                  />
                </td>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.categoria}</td>
                <td>{produto.estoque}</td>
                <td>R$ {produto.preço.toFixed(2)}</td>
                <td>R$ {produto.venda.toFixed(2)}</td>
                <td>{produto.lucro}</td>
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

export default ProdutosPage;
