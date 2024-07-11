import React from "react";

const App = () => {
  return (
    <div className="game">
      <h1>Jogo da memória</h1>
      <div className="itens-container">
        <button id="item">⭐</button>
        <button id="item">⬜</button>
        <button id="item">⚪</button>
        <button id="item">🔷</button>
        <button id="item">❤️</button>
        <button id="item">✖</button>
      </div>
    </div>
  );
};

export default App;
