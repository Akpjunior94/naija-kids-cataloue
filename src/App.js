import React from 'react';
import './App.css';
import GameListGrid from './components/games/GameListGrid';
import Header from './components/ui/Header';

const App = () => {

  return (
    <div className="container">
      <Header/>
      <GameListGrid/>
    </div>
  );
}

export default App;
