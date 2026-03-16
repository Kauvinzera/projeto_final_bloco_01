import * as readline from 'readline-sync';
import { Cliente } from './src/model/Cliente';
import { Pedido } from './src/model/Pedido';

export function main() {
    let opcaoInical: number;
    let opcao: number;
    let entrou: boolean = false;
    let clientes: Cliente[] = [];
    let pedidos: Pedido[] = [];


while (true) {

    console.log("*******************************************************");
    console.log("                                                       ");
    console.log("                  OFFICE SETUPZ COM Z                  ");
    console.log("                                                       ");
    console.log("*******************************************************");
    console.log("                                                       ");    
    console.log("              1 - Criar Conta                          ");
    console.log("              2 - Fazer Login                          ");
    console.log("                                                       ");
    console.log("*******************************************************");
    console.log("                                                       ");

opcaoInical = readline.questionInt("Digite o número da opção desejada: ");

if (opcaoInical == 1) {

    console.log("\nCadastro de Conta\n");
    let cliente = new Cliente();
    cliente.nome = readline.question("Digite seu nome: ");
    cliente.id = readline.questionInt("Digite seu CPF (apenas números): ");
    cliente.senha = readline.question("Digite sua senha: ");
    cliente.email = readline.question("Digite seu email: ");
    cliente.telefone = readline.questionInt("Digite seu telefone (apenas números): ");
    cliente.endereco = readline.question("Digite seu endereço: ");
    clientes.push(cliente);
    console.log("\nConta criada com sucesso! Agora você pode fazer login.\n");

    console.log("\n Aperte qualquer tecla para continuar... \n");
    keyPress();


} else if (opcaoInical == 2) {

    console.log("\nLogin\n");
    let numero = readline.questionInt("Digite seu CPF (apenas números): ");
    let senha = readline.question("Digite sua senha: ", { hideEchoBack: true });

    for (let cliente of clientes) {
        if (cliente.id === numero && cliente.senha === senha) {
        entrou = true;
    console.log("\nLogin bem-sucedido! Bem-vindo à Office SetupZ com Z!\n");
    break;
        } else if (cliente.id === numero && cliente.senha !== senha) {
            console.log("\nSenha incorreta. Por favor, tente novamente.\n");
            keyPress();
            break;
        } else if (cliente.id !== numero) {
            console.log("\nCPF não cadastrado. Por favor, tente novamente.\n");
            keyPress();
            break;
        } else {
            console.log("\nLogin falhou. Por favor, tente novamente.\n");
            keyPress();
            break;
        }
    }

    console.log("\n Aperte qualquer tecla para continuar... \n");
    keyPress();
}

if (entrou == true) {
    console.log("*******************************************************");
    console.log("                                                       ");
    console.log("                  OFFICE SETUPZ COM Z                  ");
    console.log("                                                       ");
    console.log("*******************************************************");
    console.log("                                                       ");
    console.log("              1 - Fazer Pedido                         ");
    console.log("              2 - Listar todos os Pedidos              "); 
    console.log("              3 - Buscar Pedido por Número             ");
    console.log("              4 - Atualizar Dados da Conta             ");
    console.log("              5 - Apagar Conta                         ");  
    console.log("              6 - Atualizar Pedido                     ");
    console.log("              7 - Cancelar Pedido                      ");        
    console.log("              8 - Listar Produtos                      ");                  
    console.log("              9 - Sair                                 ");
    console.log("                                                       ");
    console.log("*******************************************************");
    console.log("                                                       ");

    console.log("Digite o número da opção desejada: ");
    opcao = readline.questionInt("");

    if (opcao == 9) {
        console.log("\n Obrigado por utilizar o sistema de pedidos da Office SetupZ com Z! Até a próxima! \n");
        sobre();
        break;
    }

    switch (opcao) {
        case 1:
            console.log("\n\n Cadastrar Cliente\n\n");



            keyPress();
            break;
        case 2:
            console.log("\n\nListar todos os Dados do Cliente\n\n");

            keyPress();
            break;
        case 3:
            console.log("\n\nBuscar Pedido por Número\n\n");

            keyPress();
            break;
        case 4:
            console.log("\n\nAtualizar Dados do Pedido\n\n");

            keyPress();
            break;
        case 5:
            console.log("\n\nApagar Pedido\n\n");

            keyPress();
            break;
        case 6:
            console.log("\n\nAtualizar Pedido\n\n");

            keyPress();
            break;
        case 7:
            console.log("\n\nCanceler Pedido\n\n");

        case 8:
            console.log("\n\nListar Produtos\n\n");

            keyPress();
            break;
        default:
            console.log("\n\nOpção inválida. Por favor, digite um número entre 1 e 7.\n\n");
            keyPress();
            break;
        

}

}

}

}

export function sobre() {
    console.log("*******************************************************");
    console.log("Projeto desenvolvido por: ");
    console.log("Kauã Vinícius Sabino de Moraes - kauvini2007@gmail.com");
    console.log("https://github.com/Kauvinzera");
    console.log("*******************************************************");

}

function keyPress(): void {
    console.log("Pressione qualquer tecla para continuar..."); 
    readline.prompt();

}


main();