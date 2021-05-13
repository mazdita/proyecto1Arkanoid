/*document.addEventListener('DOMContentLoaded',() => {
  

let game = new Game('canvas-game', onGameOver);

showPanel('start-panel');
const startBtn = document.getElementById('start-button');
const restartBtn = document.getElementById('restart-btn')

startBtn.addEventListener('click',startGame)

restartBtn.addEventListener('click',() => {
  
  game = new Game ('canvas-game',onGameOver);
  startGame();
})

function onGameOver() {
  showPanel('game-over-panel')
}
function startGame(){
  showPanel('canvas-game')
}

});

function showPanel(panelId) {
  document.querySelectorAll('.panel').forEach(panel => panel.style.display = 'none');
  document.getElementById(panelId).style.display = "block";
}
*/



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
