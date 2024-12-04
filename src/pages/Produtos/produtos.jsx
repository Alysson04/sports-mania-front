// ProdutoPage.jsx
import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import './produtos.css';

const Produtos = [
  {
    id: 1,
    nome: 'Tênis Esportivo',
    categoria: 'Calçados',
    quantidade: 50,
    estoque: 30,
    compra: 150.00,
    venda: 250.00,
    lucro: '66.67%',
    foto: 'https://via.placeholder.com/50' // Substitua pelo caminho da sua imagem
  },
  {
    id: 2,
    nome: 'Camiseta Esportiva',
    categoria: 'Vestuário',
    quantidade: 100,
    estoque: 80,
    compra: 30.00,
    venda: 60.00,
    lucro: '100%',
    foto: 'https://via.placeholder.com/50' // Substitua pelo caminho da sua imagem
  },  {
    id: 2,
    nome: 'Camiseta Esportiva',
    categoria: 'Vestuário',
    quantidade: 100,
    estoque: 80,
    compra: 30.00,
    venda: 60.00,
    lucro: '100%',
    foto: 'https://via.placeholder.com/50' // Substitua pelo caminho da sua imagem
  },
  // Adicione mais produtos conforme necessário
];

function ProdutosPage() {
  // Estado para controlar a exibição do formulário de cadastro
  const [showCadastro, setShowCadastro] = useState(false);
  
  // Função para alternar a exibição do formulário de cadastro
  const toggleCadastro = () => {
    setShowCadastro(!showCadastro);
  };

  return (
    <div>
      <h2 className="content-title">Produtos</h2>

      {/* Toolbar com Filtro e Adicionar */}
      <div className="toolbar">
        <button className="filter-btn">
          <FiFilter size={18} /> Filtrar
        </button>
        <button className="add-btn" onClick={toggleCadastro}>
          <AiOutlinePlusCircle size={18} /> Adicionar Produto
        </button>
      </div>

      {/* Se showCadastro for true, exibe o formulário de cadastro */}
      {showCadastro && (
        <div className="form-cadastro">
          <h3>Cadastro de Produto</h3>
          <form>
            <div>
              <label>Nome:</label>
              <input type="text" placeholder="Nome do produto" />
            </div>
            <div>
              <label>Categoria:</label>
              <input type="text" placeholder="Categoria" />
            </div>
            <div>
              <label>Quantidade:</label>
              <input type="number" placeholder="Quantidade" />
            </div>
            <div>
              <label>Estoque:</label>
              <input type="number" placeholder="Estoque" />
            </div>
            <div>
              <label>Compra:</label>
              <input type="number" placeholder="Preço de compra" />
            </div>
            <div>
              <label>Venda:</label>
              <input type="number" placeholder="Preço de venda" />
            </div>
            <div>
              <label>Foto:</label>
              <input type="text" placeholder="URL da foto" />
            </div>
            <button type="submit">Cadastrar</button>
            <button type="button" onClick={toggleCadastro}>Cancelar</button>
          </form>
        </div>
      )}

      {/* Tabela de Produtos */}
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th>Foto</th>
              <th>ID</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Quantidade</th>
              <th>Estoque</th>
              <th>Compra</th>
              <th>Venda</th>
              <th>Lucro (%)</th>
            </tr>
          </thead>
          <tbody>
            {Produtos.map((produto) => (
              <tr key={produto.id}>
                <td><img src={produto.foto} alt={produto.nome} className="product-image" /></td>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.categoria}</td>
                <td>{produto.quantidade}</td>
                <td>{produto.estoque}</td>
                <td>R$ {produto.compra.toFixed(2)}</td>
                <td>R$ {produto.venda.toFixed(2)}</td>
                <td>{produto.lucro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProdutosPage;
