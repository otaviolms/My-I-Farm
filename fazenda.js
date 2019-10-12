class Fazenda {
    constructor(){
//        this.user = user;
        this.farmMatrix = this.criaFazenda(cols, rows);
        this.construcoes = new Array();
    }

    show(){
        stroke(1);
        fill(245);
        let x = 0;
        let y = 0;
        for(let i = 0; i < this.farmMatrix.length; i++){
            y = 0;
            for(let j = 0; j < this.farmMatrix[i].length; j++){
                rect(x, y, cellSize, cellSize);
                y = y + cellSize - 1;
            }
            x = x + cellSize;
        }

        for(let construcao of this.construcoes){
            construcao.show();
        }
    }

    criaFazenda(cols, rows){
        let arr = new Array(cols);
        for(let i = 0; i < arr.length; i++){
            arr[i] = new Array(rows);
        }

        return arr;
    }

    inserirConstrucao(mx, my){
        let px = Math.floor(mx / cellSize);
        let py = Math.floor(my / cellSize);
    //    console.log('MX: ' + mx + ' | MY: ' + my + ' - PX: ' + px + ' | PY: ' + py);
        let sx = 2;
        let sy = 2;
        let rt = 0;
        let ct = new Construcao(px,py,sx,sy,1);
        this.construcoes.push(ct);
    }
}