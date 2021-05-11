class Paddle {
    constructor(ctx) {
        this.ctx= ctx
        this.x = this.ctx.canvas.width/2
        this.y = this.ctx.canvas.height-100
        this.h = 15
        this.w = 100

        this.vx = 0
        
       
    }
    draw () {
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h)
        ctx.fillStyle = "grey"
        ctx.fill()
        ctx.closePath()
    }

    onKeyEvent(event) {
       if(event.type === "keydown") {
          switch(event.keyCode) {
            case KEY_RIGHT:
                console.log('entro')
                this.vx = 5
                break;
            case KEY_LEFT:
                this.vx = -5
                break; 
            } 
        } else if(event.type === "keyup") { 
         switch(event.keyCode) {
             case KEY_RIGHT:
                    this.vx = 0
                    break;
             case KEY_LEFT:
                    this.vx = 0
                    break;
            }
        }
    }
    
    move() {
        if(this.x + this.vx >= this.ctx.canvas.width-this.w || this.x + this.vx <= 0) {
            this.vx = 0;
        }else {
          this.x += this.vx 
        }
        
    }
    animate() {
        if (this.vx < 0|| this.vx > 0){
            this.ctx.draw++

        }
        
    }

}
