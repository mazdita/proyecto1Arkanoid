class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;

    this.bg = new Background(ctx);
    this.paddle = new Paddle(ctx);
    this.ball = new Ball(ctx);
    this.bricks = [];
    this.initBricks();

    this.score = new Score(ctx);

  }
  initBricks() {
    let x = 70;
    let y = 55;
    for (let r = 0; r < 5; r++) {
      let brick ;
      for (let c = 0; c < 9; c++) {
         brick = new Brick(this.ctx, x, y)
        this.bricks.push(brick)
        x = x + brick.w + 1
      }
      x = 70
      y = y + brick.h + 1
    }
  }
  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.move();
      this.draw();
      this.checkCollisions();
      
    }, 1000 / 60);
  }


  onKeyEvent(event) {

    this.paddle.onKeyEvent(event)
    this.ball.onKeyEvent(event)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.clearBricks()
  }

  draw() {
    this.bg.draw();
    this.paddle.draw();
    this.ball.drawBall();
    this.bricks.forEach(brick => brick.draw());
    this.score.draw();

  }

  clearBricks() {
    this.bricks = this.bricks.filter(brick => brick.isVisible)
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

  checkCollisions() {
    const ballPaddle = this.ball.collide(this.paddle)
    if (ballPaddle === true) {
      this.ball.vy *= -1;
    }
    
    const ballBrick = this.bricks.some(brick =>{
        if (this.ball.collide(brick)) {
          brick.isVisible = false
          this.score.value += 1
          this.ball.vy *= -1
          return true
        } else {
          return false
        }
      })
   

    if (this.ball.isFloor()) {
      this.gameOver()
    }

  }
}

//const newBricks =this.bricks.filter(brick => !this.ball.collide(brick))
