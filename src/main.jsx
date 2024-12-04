// App.js ou index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Header from "./components/Header";
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Clientes from './pages/Clientes/Clientes.jsx';
import Entradas from './pages/Entradas/Entradas.jsx';

import Fornecedores from './pages/Fornecedores/Fornecedores.jsx';
import Produtos from './pages/Produtos/Produtos.jsx';
import Saidas from './pages/Saidas/Saidas.jsx';
import Categorias from './pages/Categorias/Categorias.jsx';



function App() {
  return (
    <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

function Layout(){
  return(
    <>
<Header />
<Outlet />
</>
  )
}

const router = createBrowserRouter([
  {
  element: <Layout />,
  children: [
  {
    path: "/", // Rota raiz
        element:<Produtos/>
  },{
  path: "/Produtos",
  element: <Produtos />
  },{
    path: "/Saidas",
    element: <Saidas/>
  },{
    path: "/Fornecedores",
    element: <Fornecedores/>

  },{
 
  },{
    path: "/Entradas",
    element:<Entradas/>
  },{
    path:"/Dashboard",
    element:<Dashboard/>

  },{
    path:"/Clientes",
    element:<Clientes/>
  },{
    path: "/Categorias",
    element: <Categorias/>
  }
  ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
