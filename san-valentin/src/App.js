import React, { useState } from "react";
import "./App.css";
import App2 from "./App2"; // Importamos el segundo componente

function App() {
  // Estado para la posición del botón "No"
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [showApp2, setShowApp2] = useState(false); // Estado para cambiar de vista

  // Función para mover el botón a una posición aleatoria
  const moveButton = () => {
    const newTop = Math.random() * 80 + 10; // Evita que se salga de la pantalla
    const newLeft = Math.random() * 80 + 10;

    setPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  if (showApp2) {
    return <App2 />; // Si se presiona "Sí", renderiza App2
  }

  return (
    <div className="app-container">
      <h1>¿Quieres ser mi San Valentín? 💖</h1>
      <div className="foto"></div>
      <div className="botones">
        <button className="si" onClick={() => setShowApp2(true)}>
          Sí
        </button>
        <button
          className="no"
          style={{ top: position.top, left: position.left }}
          onMouseEnter={moveButton} // Se mueve cuando el mouse se acerca
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;
