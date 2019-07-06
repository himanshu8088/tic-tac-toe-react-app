import ReactDOM from 'react-dom';
import Game from './module/game';
import React from 'react';

const rootElement = document.getElementById('root');
const gameElement = <Game/>;
ReactDOM.render(gameElement, rootElement);