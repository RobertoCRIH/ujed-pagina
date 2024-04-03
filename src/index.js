import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter , RouterProvider } from 'react-router-dom';

import "./assets/global.scss"
//Pages
import Home from './pages/home';
import Crud from './pages/crud';
import CarreraEditar from './pages/carreraEditar';
import OfertaEducativa from './pages/ofertaEducativa';
import PaginaNoticias from './pages/paginaNoticias';
import PaginaCarrera from './pages/paginaCarrera';


//Route Elements


//Router de la página

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/admin",
    element: <Crud/>,
  },
  {
    path:"/admin/editarcarrera/:id",
    element: <CarreraEditar/>
  },
  {
    path:"/oferta-educativa/:page",
    element: <OfertaEducativa/>
  },
  {
    path:"/noticias/:id",
    element: <PaginaNoticias/>
  },
  {
    path: "/pagina-oferta/:id/:nombre",
    element: <PaginaCarrera/>

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
