class Ball {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = (this.ctx.canvas.width /2)+25
        this.y = this.ctx.canvas.height-110
        this.r = 6
        this.w = this.r * 2
        this.h =this.w
        this.isShooted = false
        this.vx = 2
        this.vy = -2   
    }

    drawBall() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        this.ctx.fillStyle = 'white'
        this.ctx.fill()
        this.ctx.closePath()
    }
    draw() {
        this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
        this.drawBall();
        
    }
    onKeyEvent(event) {
        if(event.type === "keydown") {
           switch(event.keyCode) {
             case SPACE:
                 this.isShooted = true
                 break;
             } 
         } 
     }
    
    isFloor() {
        return this.y + this.w >= this.ctx.canvas.height
    }


    move(barVx) {
        this.rebound()
      if (this.isShooted) {
            this.x += this.vx
            this.y += this.vy
        } else {
            this.x += barVx
        }
    }

    rebound() {
        if(this.x + this.w  >= this.ctx.canvas.width || this.x + this.w <= 0) {
            this.vx *= -1;

        }if( this.y + this.w <= 0) {
            this.vy *= -1;
        }
    }
    
     collide(el) {
         
        const collideX = el.x + el.w > this.x && el.x < this.x + this.w
        const collideY = el.y < this.y + this.h && el.y + el.h > this.y
        return this.isShooted && collideX && collideY
      }
    
}
