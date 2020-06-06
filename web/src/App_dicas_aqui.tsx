/*
{useState} - permite coletar o estado. Retorna sempre um Array com a seguinte estrutura:
[valor do estado, função para atualizar o valor do estado] 
*/


import React, {useState} from 'react';
import './App.css';
import Header from './Header';

function App() {
  
  const [counter,setCounter] = useState(0);

  function handleButtonClick(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="Titulo Alterado"/>
      <h1>Conteúdo da aplicação.</h1>

      <h1>{counter}</h1>

      <button type="button" onClick={handleButtonClick}>Incrementar</button>
    </div>
  );
}

export default App;
