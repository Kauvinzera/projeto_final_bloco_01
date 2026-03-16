import { PedidoRepository } from "../repository/PedidoRepository";
import { Pedido } from "../model/Pedido";

export class PedidoController implements PedidoRepository {

    private listaPedidos: Array<Pedido> = new Array<Pedido>();

procurarPorNumero(id: number, numero: number): void {

    let encontrou = false;

    for (let pedido of this.listaPedidos) {

        if (pedido.id === numero && pedido.clienteId === id) {

            console.log("\nPedido ID: " + pedido.id);
            console.log("Cliente ID: " + pedido.clienteId);
            console.log("Valor Total: " + pedido.valorTotal);
            console.log("Status de Pagamento: " + (pedido.statusPagamento ? "Pago" : "Não pago"));

            encontrou = true;
            break;
        }
    }

    if (!encontrou) {
        console.log("\nPedido não encontrado.\n");
    }

}
        listarTodas(id: number): void {

            let encontrou = false;
            for (let pedido of this.listaPedidos) {
                if (pedido.clienteId === id) {
                    console.log("\nPedido ID: " + pedido.id);
                    console.log("Cliente ID: " + pedido.clienteId);
                    console.log("Valor Total: " + pedido.valorTotal);
                    console.log("Status de Pagamento: " + (pedido.statusPagamento ? "Pago" : "Não pago"));
                    console.log("-----------------------------------");
                    encontrou = true;
                }

        }
        if (!encontrou) {
            console.log("\nNenhum pedido encontrado para este cliente.\n");
        }

    }

        cadastrar(pedido: Pedido): void {

        pedido.id = this.listaPedidos.length + 1;

        this.listaPedidos.push(pedido);

        console.log("\nPedido cadastrado com sucesso!\n");

}

        atualizar(pedido: Pedido): void {
    let pedidoExistente = this.buscarNoArray(pedido.clienteId, pedido.id);
        if (pedidoExistente !== null) {
        // Apenas atualiza a quantidade (ou produtos se quiser expandir)
        pedidoExistente.quantidade = pedido.quantidade;
        pedidoExistente.valorTotal = pedido.quantidade * pedidoExistente.precoProduto;
        console.log("\nPedido atualizado com sucesso!\n");
        } else {
        console.log("\nPedido não encontrado. Por favor, verifique o numero do pedido.\n");
    }
}
        cancelar(id: number, numero: number): void {
        let pedidoExistente = this.buscarNoArray(id, numero);
            if (pedidoExistente !== null) {
                pedidoExistente.status = 3; // Cancelado
                pedidoExistente.statusPagamento = false; // Define como não pago
                console.log("\nPedido cancelado com sucesso!\n");
                this.listaPedidos.splice(this.listaPedidos.indexOf(pedidoExistente), 1); // Remove o pedido da lista
            } else {
                console.log("\nPedido não encontrado. Por favor, verifique o numero do pedido.\n");
    }
}

            realizarPagamento(id: number, numero: number): void {
                let pedidoExistente = this.buscarNoArray(id, numero);
                if (pedidoExistente !== null) {
                    if (!pedidoExistente.statusPagamento) {
                        pedidoExistente.statusPagamento = true;
                        console.log("\nPagamento realizado com sucesso!\n");
                    } else {
                        console.log("\nEste pedido já está pago.\n");
                    }
                } else {
                    console.log("\nPedido não encontrado. Por favor, verifique o numero do pedido.\n");
                }
            }

    public buscarNoArray(id: number, numero: number): Pedido | null {

    for (let busca of this.listaPedidos) {

        if (busca.id === numero && busca.clienteId === id) {
            return busca;
        }

    }

    return null;
}
        
    
    }
    

