import React from "react";
import './categorias.css';

const Categorias = () => {
    return(
        <div className="page-container">
            <div className="table-container">
              <div className="table-header">
                <h2>Categorias</h2>
                <div className="actions">
                  
                  <button className="add-button">+ Adicionar Categoria</button>
                </div>
              </div>
              <div className="table-scroll">
                <table>
                  <tbody>
                    <tr><td>Basquete</td></tr>
                    <tr><td>Vôlei</td></tr>
                    <tr><td>Futebol</td></tr>
                    <tr><td>Tênis</td></tr>
                    <tr><td>Musculação</td></tr>
                    <tr><td>Crossfit</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    );
}

export default Categorias;
