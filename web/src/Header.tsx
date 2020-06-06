/*
FC = Function Componente - Um componente criado em formato de função.

React.FC = Dita que o componente é genérico que pode receber um parâmetro
que diz o que ele pode receber.

Interface é a forma de definir as tipagens de um objeto. 
Logo abaixo na definição da interface a propriedade title, se possuir uma sinal de '?' após
o nome, significa que não é obrigatório, caso contrário é obrigatória. 



*/

import React from 'react';
interface HeaderProps{
    title?: string;
}

const Header: React.FC<HeaderProps> = (props)=>{
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;