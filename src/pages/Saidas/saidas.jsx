import React from 'react';
import './saidas.css';
import { FaArrowLeft } from "react-icons/fa";

const Produtos = [

  {

    produto: 'Camiseta Esportiva',
    notafiscal: '123218481',
    datadavenda: "12/02/2024",
    preço: 30.0,
    desconto: 60.0,
   
   
  },
];

function ProdutosTable() {
  return (
    <div>
      <div className="divProdutos">
        <h2 className="content-title">
          <FaArrowLeft style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Saidas
        </h2>
      </div>

      {/* Tabela de Produtos */}
      <div className="content">
        <table className="table">
          <thead>
            <tr>
           
              
              <th>Produto</th>
              <th>Nota fiscal</th>
              <th>Data da venda</th>
              <th>Preço</th>
              <th>Desconto</th>
          
            </tr>
          </thead>
          <tbody>
            {Produtos.map((produto) => (
              <tr key={produto.notafiscal}>
             

                <td>{produto.produto}</td>
                <td>{produto.datadavenda}</td>
                <td>R$ {produto.desconto}</td>
                <td>{produto.preço}</td>
                <td>R$ {produto.desconto}</td>
          
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProdutosTable;
