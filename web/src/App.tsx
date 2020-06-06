/*
{useState} - permite coletar o estado. Retorna sempre um Array com a seguinte estrutura:
[valor do estado, função para atualizar o valor do estado] 
*/


import React from 'react';
import './App.css';
import Routes from './routes';
//import Home from './pages/Home', por estar utilizando Routes "routes.tsx" não apontaremos diretamente.



function App() {
  return(
    <Routes />
  );
}

export default App;
