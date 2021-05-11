class Obstacles {
    constructor(ctx) {
        this.ctx = ctx;
         this.x = this.c* (this.w +this.dist);
         this.y = this.f*(this.h + this.dist);
         this.w = 60;
         this.h = 20;
         this.c = 5;
         this.r = 3; 
         this.dist = 5;
         this.color = color; 
    }
    const bricks = [];
    createBricks(){
        for(let r = 0; r < brick.row; r++){
            bricks[r] = [];
            for(let c = 0; c < brick.column; c++){
                bricks[r][c] = {
                    x : c * ( this.dist + this.w ) + this.dist,
                    y : r * ( this.dist + this.h ) + this.dist,
                    status : true
                }
            }
        }

    }

    draw() {
        for( this.c = 0; this.c <5; this.c++ ) {
            for(this.r = 0;this.r < 4;this.r++ ) {
             this.ctx.beginPath();
             this.ctx.fillRect(this.x,this.y,this.w,this.h)
             this.ctx.fillStyle = "white";
             this.ctx.closePath();
            }
        }
    }

    /*isInvisible(){
        this.ctx.clearRect(this.x,this.y,this.w,this.h)
    }*/
}