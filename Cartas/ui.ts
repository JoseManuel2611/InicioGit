import { urlCarta } from "./model";

export function muestraPuntuacion(puntuacion: number): void {
  const scoreDiv = document.getElementById('score');
  if (scoreDiv) scoreDiv.textContent = `Puntuación: ${puntuacion}`;
}

export function mostrarCarta(carta: number): void {
  const img = document.getElementById('card-img') as HTMLImageElement;
  if (img) img.src = urlCarta(carta);
}

export function mostrarCartaBocaAbajo(): void {
  const img = document.getElementById('card-img') as HTMLImageElement;
  if (img) img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
}

export function mostrarMensaje(msg: string): void {
  const msgDiv = document.getElementById('message');
  if (msgDiv) msgDiv.textContent = msg;
}

export function setGameOverUI(): void {
  (document.getElementById('draw-btn') as HTMLButtonElement).disabled = true;
  (document.getElementById('stand-btn') as HTMLButtonElement).disabled = true;
  (document.getElementById('restart-btn') as HTMLButtonElement).style.display = 'inline';
}

export function resetUI(): void {
  (document.getElementById('draw-btn') as HTMLButtonElement).disabled = false;
  (document.getElementById('stand-btn') as HTMLButtonElement).disabled = false;
  (document.getElementById('restart-btn') as HTMLButtonElement).style.display = 'none';
}