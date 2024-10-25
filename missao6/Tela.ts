import * as rlSync from "readline-sync"
import {Pessoa} from "./Pessoa"

export class Tela{
    escolhaOpcoes(): string{
        // menu de opções
        console.log("Escolha uma opção:");
        console.log("=======================");
        console.log("1 - Cadastrar");
        console.log("2 - Listar");
        console.log("0 - Sair");
        const opcao = rlSync.question("Qual opção desejada: ");
        return opcao
    }

    telaCadastro(){
        //menu de cadastro
        const nome = rlSync.question("Nome: ");
        const email = rlSync.question("Email: ");
        const idade = rlSync.question("Idade: ");
    }
}

// //criação da interface readline
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })