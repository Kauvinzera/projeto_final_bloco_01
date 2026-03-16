import { Pedido } from "../model/Pedido";

export interface PedidoRepository {

    procurarPorNumero(id: number, numero: number): void;
    listarTodas(id: number): void;
    cadastrar(pedido: Pedido): void;
    atualizar(pedido: Pedido): void;
    cancelar(id: number, numero: number): void;

    realizarPagamento(id: number, numero: number): void;

}
