import { dameCarta, sumarPuntuacion, esGameOver, mensajeFinal } from "./motor";
import { muestraPuntuacion, mostrarCarta, mostrarCartaBocaAbajo, mostrarMensaje, setGameOverUI, resetUI } from "./ui";

let puntuacion: number = 0;
let gameOver: boolean = false;

function pedirCarta(): void {
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

function plantarse(): void {
  if (gameOver) return;
  setGameOverUI();
  mostrarMensaje(mensajeFinal(puntuacion));
  gameOver = true;
}

function nuevaPartida(): void {
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
  (document.getElementById('draw-btn') as HTMLButtonElement).onclick = pedirCarta;
  (document.getElementById('stand-btn') as HTMLButtonElement).onclick = plantarse;
  (document.getElementById('restart-btn') as HTMLButtonElement).onclick = nuevaPartida;
});