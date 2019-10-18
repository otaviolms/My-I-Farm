var cols;
var rows;

var size;

var game;
var gameFuture;

let a = 0;
let b = 0;

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