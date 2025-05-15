import { urlCarta } from "./model.js";

export function muestraPuntuacion(puntuacion) {
  const scoreDiv = document.getElementById('score');
  if (scoreDiv) scoreDiv.textContent = `Puntuación: ${puntuacion}`;
}

export function mostrarCarta(carta) {
  const img = document.getElementById('card-img') as HTMLImageElement | null;
  if (img) img.src = urlCarta(carta);
}

export function mostrarCartaBocaAbajo() {
  const img = document.getElementById('card-img') as HTMLImageElement | null;
  if (img) img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
}

export function mostrarMensaje(msg) {
  const msgDiv = document.getElementById('message');
  if (msgDiv) msgDiv.textContent = msg;
}

export function setGameOverUI() {
  const drawBtn = document.getElementById('draw-btn') as HTMLButtonElement | null;
  const standBtn = document.getElementById('stand-btn') as HTMLButtonElement | null;
  const restartBtn = document.getElementById('restart-btn') as HTMLButtonElement | null;
  if (drawBtn) drawBtn.disabled = true;
  if (standBtn) standBtn.disabled = true;
  if (restartBtn) restartBtn.style.display = 'inline';
}

export function resetUI() {
  const drawBtn = document.getElementById('draw-btn') as HTMLButtonElement | null;
  const standBtn = document.getElementById('stand-btn') as HTMLButtonElement | null;
  const restartBtn = document.getElementById('restart-btn') as HTMLButtonElement | null;
  if (drawBtn) drawBtn.disabled = false;
  if (standBtn) standBtn.disabled = false;
  if (restartBtn) restartBtn.style.display = 'none';
}