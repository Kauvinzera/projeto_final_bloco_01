import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    listar(): Produto[];
    cadastrar(produto: Produto): void;
    buscarPorId(id: number): Produto | null;

}