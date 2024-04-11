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
import MasNoticias from './pages/masNoticias';
import PlanEstudios from './pages/planEstudios';
import UniversidadVirtual from './pages/universidadVirtual';
import BellasArtes from './pages/bellasArtes';
import CienciasSociales from './pages/cienciasSociales';
import InvCientifica from './pages/invCientifica';
import InvHistorica from './pages/invHistorica';
import InvJuridica from './pages/invJuridica';
import Silvicultura from './pages/silvicultura';
import Login from './pages/login';
import Bibliotecas from './pages/bibliotecas';
import RecursosHumanos from './pages/recursosHumanos';
import CentroDeNegocios from './pages/centroDeNegocios';
import DifusionCultural from './pages/difusionCultural';
import DesarrolloDelDeporte from './pages/desarrolloDelDeporte';
import SobreUniversidad from './pages/sobreUniversidad';


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

  },
  {
    path:"/mas-noticias",
    element: <MasNoticias/>
  },
  {
    path:"/plan-de-estudios/:id",
    element: <PlanEstudios/>
  },
  {
    path:"/universidad-virtual",
    element: <UniversidadVirtual/>
  },
  {
    path:"/bellas-artes",
    element: <BellasArtes/>
  },
  {
    path:"/ciencias-sociales",
    element: <CienciasSociales/>
  },
  {
    path:"/investigacion-cientifica",
    element: <InvCientifica/>
  },
  {
    path: "/investigacion-historica",
    element: <InvHistorica/>
  },
  {
    path: "/investigacion-juridica",
    element: <InvJuridica/>
  },
  {
    path:"/silvicultura",
    element: <Silvicultura/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/direccion-general-de-bibliotecas",
    element: <Bibliotecas/>
  },
  {
    path: "/recursos-humanos",
    element: <RecursosHumanos/>
  },
  {
    path: "/centro-de-negocios",
    element: <CentroDeNegocios/>
  },
  {
    path: "/difusion-cultural",
    element: <DifusionCultural/>
  },
  {
    path: "/desarrollo-del-deporte",
    element: <DesarrolloDelDeporte/>
  },
  {
    path: "/sobre-la-universidad",
    element: <SobreUniversidad/>
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
