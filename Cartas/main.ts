import { dameCarta, sumarPuntuacion, esGameOver, mensajeFinal } from "./motor.js";
import { muestraPuntuacion, mostrarCarta, mostrarCartaBocaAbajo, mostrarMensaje, setGameOverUI, resetUI } from "./ui.js";

let puntuacion = 0;
let gameOver = false;

function pedirCarta() {
  if (gameOver) return;
  const carta = dameCarta();
  mostrarCarta(carta);
  puntuacion = sumarPuntuacion(puntuacion, carta);
  muestraPuntuacion(puntuacion);
  if (esGameOver(puntuacion)) {
    mostrarMensaje('Game Over. Te has pasado de 7 y 1/2.');
    setGameOverUI();
    gameOver = true;
  }
}

function plantarse() {
  if (gameOver) return;
  setGameOverUI();
  mostrarMensaje(mensajeFinal(puntuacion));
  gameOver = true;
}

function nuevaPartida() {
  puntuacion = 0;
  gameOver = false;
  muestraPuntuacion(puntuacion);
  mostrarCartaBocaAbajo();
  mostrarMensaje('');
  resetUI();
}

document.addEventListener('DOMContentLoaded', () => {
  muestraPuntuacion(puntuacion);
  mostrarCartaBocaAbajo();
  const drawBtn = document.getElementById('draw-btn');
  if (drawBtn) drawBtn.onclick = pedirCarta;

  const standBtn = document.getElementById('stand-btn');
  if (standBtn) standBtn.onclick = plantarse;

  const restartBtn = document.getElementById('restart-btn');
  if (restartBtn) restartBtn.onclick = nuevaPartida;
});