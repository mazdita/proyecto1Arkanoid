class Brick {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = 60;
        this.h = 20;
        this.isVisible = true
        this.color = this.randomColor()
    }

    drawNumber(){
       console.log(this.randomColor())
    }
    
    randomBetween (min, max) {
       return min + Math.floor(Math.random() * (max - min + 1))
    }

    randomColor() {
        const r = this.randomBetween(0, 255)
        const g = this.randomBetween(0, 255)
        const b = this.randomBetween(0, 255)

        return `rgb(${r}, ${g}, ${b})`
    }
    
    draw() {

        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
        this.ctx.restore();


    }


    /*isInvisible(){
        this.ctx.clearRect(this.x,this.y,this.w,this.h)
    }*/
}