/*
  Jogo da vida de Conway

  As regras são:

  - Qualquer célula viva com menos de dois vizinhos vivos morre de solidão.
  - Qualquer célula viva com mais de três vizinhos vivos morre de superpopulação.
  - Qualquer célula morta com exatamente três vizinhos vivos se torna uma célula viva.
  - Qualquer célula viva com dois ou três vizinhos vivos continua no mesmo estado para a próxima geração.
  
*/

var cols;
var rows;

var size;

var game;
var gameFuture;

let a = 0;
let b = 0;
//var game = [cols][rows];

function setup() {
    size = 80;
    console.log('Cols - ' + Math.floor(window.innerWidth / size));
    console.log('Rows - ' + Math.floor(window.innerHeight / size));
    cols = Math.floor(window.innerWidth / size);
    rows = Math.floor(window.innerHeight / size);

    var cnv = createCanvas(cols * size + 1, (rows * (size - 1)) + 2);
    frameRate(1);

    let posx = (window.innerWidth - cnv.width) / 2;
    let posy = (window.innerHeight - cnv.height) / 2;

    cnv.position(posx, posy);

    game = make2DArray(cols, rows);
    randomLife();
    
    gameFuture = game;
}

function draw() {
//    for(let i = 0; i < game.length; i++){
//        for(let j = 0; j < game[i].length; j++){
//            let vizinhos = contarVizinhos(i, j);
//
//            if(vizinhos < 2 || vizinhos > 3){
//                gameFuture[i][j] = 0;
//            }
//
//            if(game[i][j] == 0 && vizinhos == 3){
//                gameFuture[i][j] = 1;
//            }
//
//            if(vizinhos == 2 || vizinhos == 3){
//                gameFuture[i][j] = 1;
//            }
//        }
//    }
    let vizinhos = contarVizinhos(a, b);
    
    if(vizinhos < 2 || vizinhos > 3){
        gameFuture[a][b] = 0;
    }
    
    if(game[a][b] == 0 && vizinhos == 3){
        gameFuture[a][b] = 1;
    }
    
    if(vizinhos == 2 || vizinhos == 3){
        gameFuture[a][b] = 1;
    }
    printGameMatrix();

    a = a + 1;
    if(a == cols){
        a = 0;
        b = b + 1;
    }
    if(b == rows){
        a = 0;
        b = 0;
        game = gameFuture;
        gameFuture = game;
    }
}

//function draw() {
//    gameFuture = game;
//    
////    for(let i = 0; i < game.length; i++){
////        for(let j = 0; j < game[i].length; j++){
////            game[i][j] = (Math.floor(random(100)) < 5) ? 0 : 1;
////        }
////    }
//    let vizinhos = contarVizinhos(a, b);
//    
//    if(vizinhos < 2 || vizinhos > 3){
//        gameFuture[a][b] = 0;
//    }
//    
//    if(game[a][b] == 0 && vizinhos == 3){
//        gameFuture[a][b] = 1;
//    }
//    
//    if(vizinhos == 2 || vizinhos == 3){
//        gameFuture[a][b] = 1;
//    }
//    printGameMatrix();
//    
//    a = a + 1;
//    if(a == cols){
//        a = 0;
//        b = b + 1;
//    }
//    if(b == rows){
//        a = 0;
//        b = 0;
//    }
//
//    game = gameFuture;
//}

function randomLife(){
    for(let i = 0; i < game.length; i++){
        for(let j = 0; j < game[i].length; j++){
            game[i][j] = (Math.floor(random(100)) < 5) ? 0 : 1;
        }
    }
}


function contarVizinhos(x, y){
    let vizinhos = 0;
    for(let i = x - 1; i <= x + 1; i++){
        if(game[i] != null){
            for(let j = y - 1; j <= y + 1; j++){
                if(game[i][j] != null){
                    if(i == x && j == y){ // ATUAL
                        if(game[i][j] == 1){ // VIVO
                            game[i][j] = 2;
                        } else { // MORTO
                            game[i][j] = 3;
                        }
                    } else { // VIZINHO
                        if(game[i][j] == 1){ // MORTO
                            game[i][j] = 4;
                        } else { // VIVO
                            game[i][j] = 5;
                            vizinhos = vizinhos + 1;
                        }
                    }
                }
            }
        }
    }
    printGameMatrix();
    for(let i = x - 1; i <= x + 1; i++){
        if(game[i] != null){
            for(let j = y - 1; j <= y + 1; j++){
                if(game[i][j] != null){
                    if(game[i][j] == 2 || game[i][j] == 4){
                        game[i][j] = 1;
                    } else if(game[i][j] == 3 || game[i][j] == 5){
                        game[i][j] = 0;
                    }
                }
            }
        }
    }
    return vizinhos;
}


function printGameMatrix(){
    stroke(1);
    fill(245);
    let x = 0;
    let y = 0;
    for(let i = 0; i < game.length; i++){
        y = 0;
        for(let j = 0; j < game[i].length; j++){
            if(game[i][j] == 0){
                fill(50);
            } else if(game[i][j] == 2){
                fill(220, 220, 255); // ATUAL VIVO
            } else if(game[i][j] == 3){
                fill(255, 220, 255); // ATUAL MORTO
            } else if(game[i][j] == 4){
                fill(220, 255, 220); // VIZINHO MORTO
            } else if(game[i][j] == 5){
                fill(255, 220, 220); // VIZINHO VIVO
            } else {
                fill(255);
            }
            rect(x, y, size, size);
            y = y + size - 1;
        }
        x = x + size;
    }
}


function make2DArray(cols, rows){
    let arr = new Array(cols);
    for(let i = 0; i < arr.length; i++){
        arr[i] = new Array(rows);
    }

    return arr;
    }
}