import {Tela} from "./Tela";
import {Banco} from "./Banco";

class Aplicacao {
    tela: Tela;
    banco: Banco;
    constructor() {
        this.tela = new Tela();
        this.banco = new Banco();
    }

    iniciar(): void{ //não sei pq o void não
        let opcao: string= "";
        while (opcao !== "0"){
            opcao = this.tela.escolhaOpcoes()
            switch (opcao) {
                case "1":
                    //cadastro;
                    break;
                case "2":
                    //lista;
                    break;
                case "0":
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        }
    }
}
const app = new Aplicacao();
app.iniciar();