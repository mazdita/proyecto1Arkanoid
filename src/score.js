class Score {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 15;
      this.y = 580;
      this.value = 0;
    }
  
    draw() {
      this.ctx.font = "30px Arial";
      this.ctx.fillText(this.value, this.x, this.y);
    }
  }