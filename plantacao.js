class Plantacao{
//    var plantas;
//    var sizeX;
//    var sizeY;
//    var color;
    
    constructor(sizeX, sizeY){
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.plantas = make2DArray(this.sizeX, this.sizeY);
        
        for(let i = 0; i < this.plantas.length; i++){
            for(let j = 0; j < this.plantas[i].length; j++){
                let planta = new Planta(3000);
                this.plantas[i][j] = planta;
            }
        }
        
//        this.color = color;
    }
    
//    plantar(x,y,tipo){
//        let planta = new Planta();
//        this.plantas[x][y] = planta;
//    }
    
    show(scale){
        push();
        
        let tltX = -(this.sizeX / 2) * scale + ((this.sizeX / 2) * 2);
        let tltY = -(this.sizeY / 2) * scale + ((this.sizeY / 2) * 2);
        
        translate(tltX, tltY);
        stroke(1);
        for(let i = 0; i < this.plantas.length; i++){
            for(let j = 0; j < this.plantas[i].length; j++){
//                rect(i * scale - (i * 2), j * scale - (j * 2), scale, scale);
                this.plantas[i][j].show(i, j, scale);
            }
        }
        
        pop();
    }
    
    setState(i, j, state){
        this.plantas[i][j].setState(state);
    }
    
    intersect(objX, objY){
        objX = objX -(-(plantacao.sizeX / 2) * scale + ((plantacao.sizeX / 2) * 2));
        objY = objY -(-(plantacao.sizeY / 2) * scale + ((plantacao.sizeY / 2) * 2));
        
        let ci = -1;
        let cj = -1;
        for(let i = 0; i < this.plantas.length; i++){
            for(let j = 0; j < this.plantas[i].length; j++){
                if(this.cellIntersect(i, j, objX, objY)){
                    ci = i;
                    cj = j;
                }
            }
        }
        if(ci == -1 || cj == -1){
            console.log('NO INTERSECT: ' + ci + ' | ' + cj);
            return false;
        } else {
            console.log('INTERSECT: ' + ci + ' | ' + cj);
            return {'i': ci, 'j':cj};
        }
    }
    
    cellIntersect(i, j, objX, objY){
        if(objX > (i * scale - (i * 2)) && objX < (i * scale - (i * 2)) + scale){
            if(objY > (j * scale - (j * 2)) && objY < (j * scale - (j * 2)) + scale){
                return true;
            } else {
                return false;
            }
        }
    }
}