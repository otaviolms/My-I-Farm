class Interface{
    constructor(usuario){
        this.usuario = usuario;
        this.botoes = new Array();
        this.botoes.push(new Botao(10, 120, 40, 2));
        this.botoes.push(new Botao(55, 120, 40, 0));
    }
    
    show(){
        this.exibirInformacao(10,20,'NOME: ' + this.usuario.nome);
        this.exibirInformacao(10,45,'EXP: ' + this.usuario.exp);
        this.exibirInformacao(10,70,'LVL: ' + this.usuario.lvl);
        this.exibirInformacao(10,95,'MONEY: ' + this.usuario.money);
        
        for(let btn of this.botoes){
            btn.show();
        }
    }
    
    exibirInformacao(pX, pY, texto){
        push();
        textAlign(LEFT, TOP);
        textSize(16);
        let txtWidth = textWidth(texto) + 10;
        fill(255);
        stroke(1);
        rect(pX, pY, txtWidth, 20);
        fill(0);
        noStroke();
        text(texto, pX + 5, pY + 5);
        pop();
    }
}