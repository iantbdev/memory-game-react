import React from "react";

const App = () => {
  return (
    <div className="game">
      <h1>Jogo da memória</h1>
      <div className="itens-container">
        <button id="item">Estrela</button>
        <button id="item">Quadrado</button>
        <button id="item">Círculo</button>
        <button id="item">Prisma</button>
        <button id="item">Coração</button>
        <button id="item">Triangulo-Inverso</button>
      </div>
    </div>
  );
};

export default App;
