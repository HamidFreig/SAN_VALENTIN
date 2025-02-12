import React from "react";
import "./App2.css";
import fondo from "./img/hk.jpg"; // Importamos la imagen

const App2 = () => {
  return (
    <div className="app-container" style={{ backgroundImage: `url(${fondo})` }}>
      <h1>
        Te espero en Restaurant Ribs, 21:00 hrs para celebrar este hermoso día
        💖✨
      </h1>
    </div>
  );
};

export default App2;
