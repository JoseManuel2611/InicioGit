import { valoresCartas, valorCarta } from "./model";

export function dameCarta(): number {
  const idx = Math.floor(Math.random() * valoresCartas.length);
  return valoresCartas[idx];
}

export function sumarPuntuacion(puntuacion: number, carta: number): number {
  return +(puntuacion + valorCarta(carta)).toFixed(2);
}

export function esGameOver(puntuacion: number): boolean {
  return puntuacion > 7.5;
}

export function mensajeFinal(puntuacion: number): string {
  if (puntuacion < 4) return 'Has sido muy conservador.';
  if (puntuacion === 5) return 'Te ha entrado el canguelo eh?';
  if (puntuacion >= 6 && puntuacion < 7.5) return 'Casi casi...';
  if (puntuacion === 7.5) return '¡Lo has clavado! ¡Enhorabuena!';
  return `Tu puntuación final es ${puntuacion}`;
}