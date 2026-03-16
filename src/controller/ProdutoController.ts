import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    
    private listaProdutos: Array<Produto> = new Array<Produto>();

    listar(): Produto[] {
        console.log("Listando todos os produtos...");
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
        return this.listaProdutos;
    }

    cadastrar(produto: Produto): void {
    this.listaProdutos.push(produto);
    console.log("\nProduto cadastrado com sucesso!\n");  
    }

    buscarPorId(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id) {
                console.log("\nProduto encontrado:\n");
                produto.visualizar();
                return produto;
            }
    }
    console.log("\nProduto não encontrado.\n");
    return null;
}

}