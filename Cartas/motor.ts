import { valoresCartas, valorCarta } from "./model.js";

export function dameCarta() {
  const idx = Math.floor(Math.random() * valoresCartas.length);
  return valoresCartas[idx];
}

export function sumarPuntuacion(puntuacion, carta) {
  return +(puntuacion + valorCarta(carta)).toFixed(2);
}

export function esGameOver(puntuacion) {
  return puntuacion > 7.5;
}

export function mensajeFinal(puntuacion) {
  if (puntuacion < 4) return 'Has sido muy conservador.';
  if (puntuacion === 5) return 'Te ha entrado el canguelo eh?';
  if (puntuacion >= 6 && puntuacion < 7.5) return 'Casi casi...';
  if (puntuacion === 7.5) return '¡Lo has clavado! ¡Enhorabuena!';
  return `Tu puntuación final es ${puntuacion}`;
}