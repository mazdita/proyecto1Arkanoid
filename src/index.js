

const ctx = document.getElementById('canvas').getContext('2d')

const game = new Game(ctx)

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start()
  }; 

//Pulsar tecla mover barra
document.addEventListener('keydown', (event) => {
    game.onKeyEvent(event);
  });

//Soltar tecla movimiento barra
document.addEventListener('keyup', (event) => {
    game.onKeyEvent(event);
  });
}