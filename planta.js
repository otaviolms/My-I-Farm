class Planta{
    constructor(time){
        this.state = 0;
        this.lastTime = Date.now();
        this.evolveTime = time;
    }
    
    show(i, j, scale){
        if(this.state >= 1 && Date.now() > this.lastTime){
            this.state = this.state + 1;
            if(this.state > 5){
                this.state = 5;
                this.lastTime = null;
            } else {
                this.lastTime = Date.now() + this.evolveTime;
            }
        }
        
        stroke(1);
        let x = i * scale - (i * 2);
        let y = j * scale - (j * 2);
        switch(this.state){
            case 0:
            default:
                fill(95, 55, 0); // VAZIO
                break;
            case 1:
                fill(30, 100, 0); // PLANTOU A SEMENTE
                break;
            case 2:
                fill(30, 150, 0); // ESTÁ CRESCENDO
                break;
            case 3:
                fill(30, 200, 0); // QUASE DANDO FRUTOS
                break;
            case 4:
                fill(30, 220, 0); // DEU FRUTOS
                break;
            case 5:
                fill(240, 220, 110); // SECOU
                break;
        }
        rect(x, y, scale, scale);
        
        switch(this.state){
            case 0:
            default:
                break;
            case 1:
                break;
            case 2:
                image(grain, x + 10, y + 10, scale - 20, scale - 20);
                break;
            case 3:
                image(sprout, x + 10, y + 10, scale - 20, scale - 20);
                break;
            case 4:
                image(sprout, x + 10, y + 10, scale - 20, scale - 20);
                break;
            case 5:
                break;
        }
        
        
        if(this.state >= 1 && this.state < 5){
            
            noStroke();
            let difTime = -((this.lastTime + this.evolveTime) - Date.now());
            let radians = (difTime * TWO_PI) / this.evolveTime;
            let percent = 200+(difTime * 100) / this.evolveTime;
//      X      --     TWO_PI
//  difTime    --     this.evolveTime
//  X * this.evolveTime = difTime * TWO_PI
//  X = (difTime * TWO_PI) / this.evolveTime;
            fill('rgba(255, 255, 255, 0.40)');
            arc(x + (scale / 2), y + (scale / 2) - 10, scale / 3, scale / 3, - HALF_PI, radians - HALF_PI, PIE);
            textAlign(LEFT, TOP);
            textSize(10);
            let txtWidth = textWidth(Math.floor(percent) + '%');
            text(Math.floor(percent) + '%', x + (scale / 2) - (txtWidth / 2), y + (scale / 2) + 10);
        }
    }
    
    setState(state){
        if(this.state == 0){
            this.state = state;
        }
        if(state == 0 && this.state >= 5){
            this.state = state;
        }
    }
}