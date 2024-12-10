import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi'; // Importando o ícone de pesquisa
import './produtos.css';
import '../../../src/index.css';
import { BsBoxSeam } from 'react-icons/bs';

const Produtos = [
  {
    id: 1,
    nome: 'Tênis Esportivo',
    categoria: 'Calçados',
    estoque: 30,
    preço: 150.0,
    venda: 250.0,
    lucro: '66.67%',
    foto: 'https://multitare.com/cdn/shop/files/Tenis_Esportivo_Masculino_Fast_Multitare.jpg?v=1724787954', // Substitua pelo caminho da sua imagem
  },
  {
    id: 2,
    nome: 'Camiseta Esportiva',
    categoria: 'Vestuário',
    estoque: 80,
    preço: 30.0,
    venda: 60.0,
    lucro: '100%',
    foto: 'https://bestpick.com.br/wp-content/uploads/2022/04/1CAM04TSFT112-front.jpg', // Substitua pelo caminho da sua imagem
  },
];

function ProdutosPage() {
  const [showCadastro, setShowCadastro] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para a pesquisa
  const [filterCategory, setFilterCategory] = useState(''); // Estado para o filtro por categoria

  // Função para alternar a exibição
  const toggleCadastro = () => {
    setShowCadastro(!showCadastro);
  };

  // Função para lidar com a pesquisa
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Função para lidar com o filtro por categoria
  const handleFilterChange = (event) => {
    setFilterCategory(event.target.value);
  };

  // Função para filtrar produtos
  const getFilteredProducts = () => {
    return Produtos.filter((produto) => {
      const matchesSearch = produto.nome
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter = filterCategory
        ? produto.categoria === filterCategory
        : true;
      return matchesSearch && matchesFilter;
    });
  };

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

  const renderTable = () => (
    <>
      <div className="divProdutos">
        <h2 className="content-title">
          <BsBoxSeam style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Produtos
        </h2>
      </div>

      {/* Toolbar com Filtro, Pesquisa e Adicionar */}
      <div className="toolbar">
        <div className="filtrar">
          <select
            className="select"
            value={filterCategory}
            onChange={handleFilterChange}
          >
            <option value="">Filtrar</option>
            <option value="Calçados">Calçados</option>
            <option value="Vestuário">Vestuário</option>
          </select>
        </div>

        {/* Botão de Pesquisa */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar produtos"
            value={searchQuery}
            onChange={handleSearchChange}
          />
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
          <tbody >
            {getFilteredProducts().map((produto) => (
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
  formTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' },
  row: { display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'flex-end' },
  inputGroup: { flex: 1, marginRight: '10px' },
  inputGroupWide: { flex: 2 },
  input: { width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px' },
  textarea: { width: '100%', height: '100px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px' },
  imageUpload: { flex: 1, textAlign: 'center' },
  fileInput: { width: '100%', padding: '5px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px' },
  buttonContainer: { display: 'flex', justifyContent: 'space-between', marginTop: '20px' },
  button: { backgroundColor: '#ccc', color: '#000', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer', fontSize: '14px' },
  buttonPrimary: { backgroundColor: '#ff9900', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer', fontSize: '14px' },
  required: { color: 'red' },
};

export default ProdutosPage;
