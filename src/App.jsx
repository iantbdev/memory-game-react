import { useState } from "react";

const App = () => {
  const [activeButton, setActiveButton] = useState(null);

  const randomNumber = () => {
    return parseInt(Math.random() * 6) + 1;
  };
  const padrao = () => {
    let cont = 0;
    const padraoCriado = [];

    while (cont < 6) {
      const numeroDoBotao = randomNumber();
      if (!padraoCriado.includes(numeroDoBotao)) {
        padraoCriado.push(numeroDoBotao);
        cont++;
      }
    }
    console.log(padraoCriado);
    animacaoPadrao(padraoCriado);
  };

  const animacaoPadrao = (padrao) => {
    padrao.forEach((id, index) => {
      setTimeout(() => {
        setActiveButton(id);
        setTimeout(() => {
          setActiveButton(null);
        }, 500);
      }, index * 1000);
    });
  };

  return (
    <div className="game">
      <h1>Jogo da memória</h1>

      <div className="itens-container">
        <button className={`item ${activeButton === 1 ? "active" : ""}`} id="1">
          ⭐
        </button>
        <button className={`item ${activeButton === 2 ? "active" : ""}`} id="2">
          ⬜
        </button>
        <button className={`item ${activeButton === 3 ? "active" : ""}`} id="3">
          ⚪
        </button>
        <button className={`item ${activeButton === 4 ? "active" : ""}`} id="4">
          🔷
        </button>
        <button className={`item ${activeButton === 5 ? "active" : ""}`} id="5">
          ❤️
        </button>
        <button className={`item ${activeButton === 6 ? "active" : ""}`} id="6">
          ✖
        </button>
      </div>
      <button className="play" onClick={padrao}>
        Play
      </button>
    </div>
  );
};

export default App;
