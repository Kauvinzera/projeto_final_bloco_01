import { Pedido } from "../model/Pedido";

export interface ProdutoRepository {

    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(pedido: Pedido): void;
    atualizar(pedido: Pedido): void;
    deletar(numero: number): void;

    retirar(numero: boolean): void;

}
