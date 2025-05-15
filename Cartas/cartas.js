let puntuacion = 0;
let gameOver = false;

const valoresCartas = [1,2,3,4,5,6,7,10,11,12];

function valorCarta(carta) {
  if (carta >= 10) return 0.5;
  return carta;
}

function urlCarta(carta) {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
}

function muestraPuntuacion() {
  const scoreDiv = document.getElementById('score');
  if (scoreDiv) scoreDiv.textContent = `Puntuación: ${puntuacion}`;
}

function mostrarCarta(carta) {
  const img = document.getElementById('card-img');
  if (img) {
    img.src = urlCarta(carta);
  }
}

function mostrarCartaBocaAbajo() {
  const img = document.getElementById('card-img');
  if (img) {
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
}

function dameCarta() {
  const idx = Math.floor(Math.random() * valoresCartas.length);
  return valoresCartas[idx];
}

function mostrarMensaje(msg) {
  const msgDiv = document.getElementById('message');
  if (msgDiv) msgDiv.textContent = msg;
}

function setGameOver() {
  gameOver = true;
  document.getElementById('draw-btn').disabled = true;
  document.getElementById('stand-btn').disabled = true;
  document.getElementById('restart-btn').style.display = 'inline';
}

function pedirCarta() {
  if (gameOver) return;
  const carta = dameCarta();
  mostrarCarta(carta);
  puntuacion = +(puntuacion + valorCarta(carta)).toFixed(2);
  muestraPuntuacion();
  if (puntuacion > 7.5) {
    mostrarMensaje('Game Over. Te has pasado de 7 y 1/2.');
    setGameOver();
  }
}

function plantarse() {
  if (gameOver) return;
  setGameOver();
  if (puntuacion < 4) mostrarMensaje('Has sido muy conservador.');
  else if (puntuacion === 5) mostrarMensaje('Te ha entrado el canguelo eh?');
  else if (puntuacion >= 6 && puntuacion < 7.5) mostrarMensaje('Casi casi...');
  else if (puntuacion === 7.5) mostrarMensaje('¡Lo has clavado! ¡Enhorabuena!');
  else mostrarMensaje(`Tu puntuación final es ${puntuacion}`);
}

function nuevaPartida() {
  puntuacion = 0;
  gameOver = false;
  muestraPuntuacion();
  mostrarCartaBocaAbajo();
  mostrarMensaje('');
  document.getElementById('draw-btn').disabled = false;
  document.getElementById('stand-btn').disabled = false;
  document.getElementById('restart-btn').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  muestraPuntuacion();
  mostrarCartaBocaAbajo();
  document.getElementById('draw-btn').onclick = pedirCarta;
  document.getElementById('stand-btn').onclick = plantarse;
  document.getElementById('restart-btn').onclick = nuevaPartida;
});