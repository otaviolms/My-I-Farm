class Construcao {
    constructor(px,py,sx,sy,rotation,grid){
        if((px > 0) && (px  < canvas.width) && (py > 0) && (py < canvas.height)){
            if(this.checkGrid(px,py,sx,sy,rotation,grid)){
                this.px = px;
                this.py = py;
                this.level = 1;
                this.sizeX = sx;
                this.sizeY = sy;
                this.rotation = rotation;
            } else {
                console.log('CONDICAO 2 - FALSE');
                return false;
            }
        } else {
            console.log('CONDICAO 1 - FALSE');
            return false;
        }
    }
    
    checkGrid(px,py,sx,sy,rotation,grid){
        for(col in cols){
            for(row in rows){
                
            }
        }
    }
    
    
    show(){
        stroke(1);
        fill(255,200,200);
        let posx = this.px * cellSize;
        let posy = this.py * cellSize - this.py;
        if(this.rotation == 0){
            rect(posx, posy, this.sizeX * cellSize, this.sizeY * cellSize - 2);
        } else {
            rect(posx, posy, this.sizeY * cellSize, this.sizeX * cellSize - 2);
        }
    }
}