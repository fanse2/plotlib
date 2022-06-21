class XYPlotter {
    constructor(id) {
        this.canvas = document.querySelector('#'+id)
        this.ctx = this.canvas.getContext('2d')
        this.xMin = 0
        this.yMin = 0
        this.xMax = this.canvas.width
        this.yMax = this.canvas.height
    }

    plotLine(x0,y0,x,y,color) {
        this.ctx.moveTo(x0,y0)
        this.ctx.lineTo(x,y)
        this.ctx.strokeStyle = color
        this.ctx.stroke()
    }

    transformXY() {
        this.ctx.transform(1,0,0,-1,0,this.canvas.height)
    }

    plotPoint(n,xArr,yArr,color,radius = 3) {
        for(let i=0; i<n; i++) {
            this.ctx.fillStyle = color
            this.ctx.beginPath()
            this.ctx.ellipse(xArr[i],yArr[i],radius,radius,0,0,Math.PI*2)
            this.ctx.fill()
        }
    }
}