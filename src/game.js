class Game {
    constructor(ctx) {
      this.ctx = ctx;
      this.intervalId = null;
  
      this.bg = new Background(ctx);
      this.paddle = new Paddle(ctx);
      this.ball = new Ball(ctx);
      this.obstacles =new Obstacles(ctx);
    }
  
    start() {
      this.intervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
        this.checkCollisions();
        
        
      }, 1000 / 60);
    }
    addObstacle(){
      const newObstacle =new Obstacles(this.ctx);
      this.obstacles.push(newObstacle);
    }
    onKeyEvent(event) {
      
      this.paddle.onKeyEvent(event)
      this.ball.onKeyEvent(event)
    }
  
    clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
  
    draw() {
      this.bg.draw();
      this.paddle.draw();
      this.ball.drawBall();
      this.obstacles.draw();
     
    }
  
    move() {
      // TODO: move everything
      this.bg.move();
      this.paddle.move();
      this.ball.move(this.paddle.vx);
    }
    
    
    gameOver() {
      clearInterval(this.intervalId);
  
      this.ctx.font = "40px Comic Sans MS"
      this.ctx.textAlign = "center"
      this.ctx.fillText(
        "GAME OVER",
        this.ctx.canvas.width / 2,
        this.ctx.canvas.height / 2
      )
    }

    checkCollisions(){
     const ballPaddle = this.ball.collide(this.paddle)
     if(ballPaddle === true){
      this.ball.vy *= -1;
     }
     const ballBrick = this.ball.collide(this.obstacles)
     if(ballBrick === true){
       console.log("hola")
       this.ball.vy *= -1; 
       //this.obstacles.isInvisible();
      }

     /*if(this.ball.isFloor()) {
       this.game.gameOver()
     }*/

    }
}