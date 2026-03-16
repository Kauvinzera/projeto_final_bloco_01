import { Cadastro } from "./Cadastro";

export class Produto {

        private _nome!: string;
        private _id!: number;
        private _quantidade!: number;
        private _preco!: number;

    constructor(nome: string, id: number, quantidade: number, preco: number) {
        this._nome = nome;
        this._id = id;
        this._quantidade = quantidade;
        this._preco = preco;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) { 
        this._nome = nome;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }

    public get preco(): number {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    

    visualizar(): void {
        console.log("Produto: " + this._nome);
        console.log("Código do produto: " + this._id);
        console.log("Quantidade total: " + this._quantidade);
        console.log("Preço unitário: R$ " + this._preco.toFixed(2));
        console.log("-----------------------------");
    }
    
}