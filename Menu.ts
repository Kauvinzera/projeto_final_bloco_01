import * as readline from 'readline-sync';
import { CadastroCliente } from './src/model/CadastroCliente';
import { Pedido } from './src/model/Pedido';
import { ClienteController } from './src/controller/ClienteController';
import { PedidoController } from './src/controller/PedidoController';
import { ProdutoController } from './src/controller/ProdutoController';
import { Produto } from './src/model/Produto';

export function main() {
    let opcaoInical: number;
    let opcao: number;
    let entrou: boolean = false;
    let clientes: ClienteController = new ClienteController();
    let contaAtual: CadastroCliente | null = null;
    let pedidos: PedidoController = new PedidoController();

//CADASTRO DE CLIENTES
let cliente1: CadastroCliente = new CadastroCliente();
cliente1.criarContaCliente("Kaua",1234,"123","Kaua@",1000, "São Paulo");

let cliente2: CadastroCliente = new CadastroCliente();
cliente2.criarContaCliente("Maria",1245,"124","Maria@",2000, "São Paulo");

let cliente3: CadastroCliente = new CadastroCliente();
cliente3.criarContaCliente("Mariana",1256,"125","Mariana@",4000, "São Paulo");

let cliente4: CadastroCliente = new CadastroCliente();
cliente4.criarContaCliente("Juliana",1257,"125","Juliana@",8000, "São Paulo");

clientes.cadastrar(cliente1);
clientes.cadastrar(cliente2);
clientes.cadastrar(cliente3);
clientes.cadastrar(cliente4);

//PRODUTOS FIXOS BASE
let notebook: Produto = new Produto("Notebook Dell", 1, 10, 3500.00);
let mouse: Produto = new Produto("Mouse logitech", 2, 100, 100.00);
let teclado: Produto = new Produto("Teclado hyperx", 3, 200, 200.00);
let monitor: Produto = new Produto("Monitor Samsung", 4, 800, 800.00);
let cadeira: Produto = new Produto("Cadeira Gamer", 5, 500, 500.00);
let mesa: Produto = new Produto("Mesa personalizada", 6, 1000, 1000.00);
let produtos: ProdutoController = new ProdutoController();

produtos.cadastrar(notebook);
produtos.cadastrar(mouse);
produtos.cadastrar(teclado);
produtos.cadastrar(monitor);
produtos.cadastrar(cadeira);
produtos.cadastrar(mesa);


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

opcaoInical = readline.questionInt("Digite o numero da opcao desejada: ");

if (opcaoInical == 1) {

    console.log("\nCadastro de Conta\n");
    let cliente = new CadastroCliente();
    cliente.nome = readline.question("Digite seu nome: ");
    cliente.id = readline.questionInt("Digite seu CPF (apenas numeros): ");
    cliente.senha = readline.question("Digite sua senha: ");
    cliente.email = readline.question("Digite seu email: ");
    cliente.telefone = readline.questionInt("Digite seu telefone (apenas numeros): ");
    cliente.endereco = readline.question("Digite seu endereço: ");
    clientes.cadastrar(cliente);
    console.log("\nConta criada com sucesso! Agora você pode fazer login.\n");

    console.log("\n Aperte qualquer tecla para continuar... \n");
    keyPress();


} else if (opcaoInical == 2) {

if (clientes.quantidadeContas() === 0) {
    console.log("\nNenhuma conta cadastrada. Por favor, crie uma conta primeiro.\n");
    keyPress();
    continue;
}

console.log("\nLogin\n");
let numero = readline.questionInt("Digite seu CPF (apenas numeros): ");
let senha = readline.question("Digite sua senha: ");

contaAtual = clientes.entrar(numero, senha);

if (contaAtual !== null) {
    entrou = true;
} else {
    entrou = false;
    console.log("\nCPF ou senha incorretos.\n");
}

console.log("\n Aperte qualquer tecla para continuar... \n");
keyPress();

while (entrou) { 
    console.log("*******************************************************");
    console.log("                                                       ");
    console.log("                  OFFICE SETUPZ COM Z                  ");
    console.log("                                                       ");
    console.log("*******************************************************");
    console.log("                                                       ");
    console.log("              1 - Fazer Pedido                         ");
    console.log("              2 - Listar todos os Pedidos              "); 
    console.log("              3 - Buscar Pedido por Numero             ");
    console.log("              4 - Atualizar Dados da Conta             ");
    console.log("              5 - Apagar Conta                         ");  
    console.log("              6 - Visualizar dados da Conta            ");    
    console.log("              7 - Atualizar Pedido                     ");
    console.log("              8 - Cancelar Pedido                      ");       
    console.log("              9 - Realizar Pagamento                   ");  
    console.log("              10 - Listar Produtos                     ");                  
    console.log("              11 - Sair                                ");
    console.log("                                                       ");
    console.log("*******************************************************");
    console.log("                                                       ");

    console.log("Digite o numero da opcao desejada: ");
    opcao = readline.questionInt("");

    if (opcao == 11) {
        console.log("\n Obrigado por utilizar o sistema de pedidos da Office SetupZ com Z! Até a próxima! \n");
        sobre();
        keyPress();
        entrou = false;
        break;
    }

    switch (opcao) {
        case 1:
            console.log("\n\n Fazer Pedido\n\n");
            produtos.listar();

            let escolha: number = readline.questionInt("Digite o numero do produto que deseja adicionar ao pedido (1 - 6): ");

            let produtoEscolhido = produtos.buscarPorId(escolha);

            let valorTotal: number = 0;
            if (produtoEscolhido) {
                let quantidadeDesejada: number = readline.questionInt("Digite a quantidade desejada: ");

                if (quantidadeDesejada > produtoEscolhido.quantidade) {
                    console.log("\nQuantidade indisponível. Por favor, escolha uma quantidade menor ou igual a " + produtoEscolhido.quantidade + ".\n");
                }
                else {
                    valorTotal = quantidadeDesejada * produtoEscolhido.preco;
                    console.log("\nProduto adicionado ao pedido. Valor total: R$ " + valorTotal.toFixed(2) + "\n");
                    produtoEscolhido.quantidade -= quantidadeDesejada;
            
            let idCliente: number = contaAtual ? contaAtual.id : 0;

            let pedido = new Pedido();

            pedido.criarPedido(idCliente, produtoEscolhido.id, quantidadeDesejada, produtoEscolhido.preco);

            pedidos.cadastrar(pedido);
            }

        }

            keyPress();
            break;
        case 2:
            console.log("\n\nListar todos os seus Pedidos\n\n");

            let idCliente: number = contaAtual ? contaAtual.id : 0;

            pedidos.listarTodas(idCliente);
            keyPress();
            break;
        case 3:
            console.log("\n\nBuscar Pedido por Numero\n\n");

            let numeroPedido: number = readline.questionInt("Digite o numero do pedido que deseja buscar: ");
            let idBuscaCliente: number = contaAtual ? contaAtual.id : 0;

            pedidos.procurarPorNumero(idBuscaCliente, numeroPedido);
            keyPress();
            break;
        case 4:
            console.log("\n\nAtualizar Dados da Conta\n\n");


    if (contaAtual) {
        contaAtual.nome = readline.question("Novo nome: ");
        contaAtual.senha = readline.question("Nova senha: ");
        contaAtual.email = readline.question("Novo email: ");
        contaAtual.telefone = readline.questionInt("Novo telefone: ");
        contaAtual.endereco = readline.question("Novo endereço: ");
        entrou = false;
        clientes.atualizar(contaAtual);
    }

            keyPress();
            break;
        case 5:
            console.log("\n\nApagar Conta\n\n");

            clientes.deletar(contaAtual ? contaAtual.id : 0);
            keyPress();
            entrou = false;
            break;
        case 6:
            console.log("\n\nVisualizar dados da Conta\n\n");

            clientes.visualizar(contaAtual ? contaAtual.id : 0);

            keyPress();
            break;
        case 7:
    console.log("\n\nAtualizar Pedido\n\n");

    let numeroPedido2: number = readline.questionInt("Digite o numero do pedido que deseja atualizar: ");
    let idBuscaCliente2: number = contaAtual ? contaAtual.id : 0;

    let pedidoParaAtualizar = pedidos.buscarNoArray(idBuscaCliente2, numeroPedido2);

    if (pedidoParaAtualizar) {
        console.log(`Produto atual: ${pedidoParaAtualizar.produtoId}, Quantidade atual: ${pedidoParaAtualizar.quantidade}`);
        let novaQuantidade = readline.questionInt("Digite a nova quantidade: ");

        pedidoParaAtualizar.quantidade = novaQuantidade;
        pedidoParaAtualizar.valorTotal = pedidoParaAtualizar.quantidade * pedidoParaAtualizar.precoProduto;

        pedidos.atualizar(pedidoParaAtualizar);

    } else {
        console.log("\nPedido não encontrado.\n");
    }

    keyPress();
    break;
        case 8:
            console.log("\n\nCancelar Pedido\n\n");

            let numeroPedido3: number = readline.questionInt("Digite o numero do pedido que deseja cancelar: ");
            let idBuscaCliente3: number = contaAtual ? contaAtual.id : 0;

            pedidos.cancelar(idBuscaCliente3, numeroPedido3);

            keyPress();
            break;
        case 9:
            console.log("\n\nRealizar Pagamento\n\n");

            let numeroPedido4: number = readline.questionInt("Digite o numero do pedido que deseja pagar: ");
            let idBuscaCliente4: number = contaAtual ? contaAtual.id : 0;

            pedidos.realizarPagamento(idBuscaCliente4, numeroPedido4);

            keyPress();
            break;


        case 10:
            console.log("\n\nListar Produtos\n\n");

            produtos.listar();

            keyPress();
            break;
        default:
            console.log("\n\nOpcao inválida. Por favor, digite um numero entre 1 e 7.\n\n");
            keyPress();
            break;
        

}

}

}

}

}

export function sobre() {
    console.log("*******************************************************");
    console.log("Projeto desenvolvido por: ");
    console.log("Kaua Vinícius Sabino de Moraes - kauvini2007@gmail.com");
    console.log("https://github.com/Kauvinzera");
    console.log("*******************************************************");

}

function keyPress(): void {
    console.log("Pressione qualquer tecla para continuar..."); 
    readline.prompt();

}


main();