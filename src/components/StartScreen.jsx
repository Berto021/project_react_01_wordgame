import React from 'react';
import './StartScreen.css';

import gatinhoGame from '../assets/gatinho_start.jpg';

export const StartScreen = ({ startGame }) => {
  return (
    <div className="principal_screen">
      <h1>Word Game</h1>
      <h2 className='sub_tittle'>Clique abaixo para jogar</h2>
      <div className='img_Container'>
        <img className='gato_inicial' src={gatinhoGame} alt="gatinho jogador" />

      </div>
      
      <button onClick={startGame}>Iniciar</button>
    </div>
  );
};
