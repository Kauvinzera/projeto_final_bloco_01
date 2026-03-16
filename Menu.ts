import * as readline from 'readline-sync';


export function main() {
    let opcao: number;

while (true) {
    console.log("*******************************************************");
    console.log("                                                       ");
    console.log("                  OFFICE SETUPS COM Z                  ");
    console.log("                                                       ");
    console.log("*******************************************************");
    console.log("                                                       ");
    console.log("               1 - Adicionar Pedido                        ");
    console.log("               2 - Listar todos os Pedidos             ");
    console.log("               3 - Buscar Pedido por Número            ");
    console.log("               4 - Atualizar Dados do Pedido           ");
    console.log("               5 - Apagar Pedido                       ");       
    console.log("               6 - Listar Produtos                     ");                  
    console.log("               7 - Sair                                ");
    console.log("                                                       ");
    console.log("*******************************************************");
    console.log("                                                       ");

    console.log("Digite o número da opção desejada: ");
    opcao = readline.questionInt("");

    if (opcao == 7) {
        console.log("\n Obrigado por utilizar o sistema de pedidos da Office Setups com Z! Até a próxima! \n");
        sobre();
        break;
    }

    switch (opcao) {
        case 1:
            console.log("\n\nAdicionar Pedido\n\n");


            keyPress();
            break;
        case 2:
            console.log("\n\nListar todos os Pedidos\n\n");

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