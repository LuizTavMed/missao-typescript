export class Banco {
    listaPessoa: string[];
    constructor(){
        this.listaPessoa = []
    }
    
    cadastraPessoa(){
        this.listaPessoa.push(pessoa)
    }

    buscaTodasPessoas(){
        return this.listaPessoa
    }
}