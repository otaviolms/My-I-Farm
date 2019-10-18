class Usuario{
    constructor(nome){
        this.nome = nome;
        this.lvl = 1;
        this.exp = 0;
        this.money = 0;
        this.tools =
        {
            'tools':
            [
                {'tool':'PÁ','time':Date.now()},
                {'tool':'SEMENTE','time':Date.now()}
            ]
        };
    }
}