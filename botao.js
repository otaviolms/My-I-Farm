class Botao{
    constructor(pX, pY, size, tipo){
        this.pX = pX;
        this.pY = pY;
        this.size = size;
        this.color = 255;
        this.active = false;
        this.tipo = tipo;
    }
    
    show(){
        push();
        fill(this.color);
        stroke(1);
        if(this.active){
            rect(this.pX - 3, this.pY - 3, this.size + 6, this.size + 6, 6);
        }
        rect(this.pX, this.pY, this.size, this.size, 3);
        switch(this.tipo){
            case 0:
            default:
                image(grain, this.pX + 8, this.pY + 8, this.size - 16, this.size - 16);
                break;
            case 1:
                image(rake, this.pX + 8, this.pY + 8, this.size - 16, this.size - 16);
                break;
            case 2:
                image(shovel, this.pX + 8, this.pY + 8, this.size - 16, this.size - 16);
                break;
            case 3:
                image(sprout, this.pX + 8, this.pY + 8, this.size - 16, this.size - 16);
                break;
        }
        pop();
    }
    
    intersect(mx, my){
        if(mx > this.pX && mx < this.pX + this.size && my > this.pY && my < this.pY + this.size){
            this.ativar();
            return true;
        } else {
            this.desativar();
            return false;
        }
    }
    
    ativar(){
        this.color = 150;
        this.active = true;
    }
    
    desativar(){
        this.color = 255;
        this.active = false;
    }
}