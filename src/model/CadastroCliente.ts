import { Cadastro } from "./Cadastro";

export class CadastroCliente extends Cadastro {

private _senha!: string;
private _email!: string;
private _telefone!: number;
private _endereco!: string;
private _qtdPedidos: number = 0;

constructor () {
super();
}

get senha(): string {
    return this._senha;
}

set senha(senha: string) {
    this._senha = senha;
}

get email(): string {
    return this._email;
}

set email(email: string) {
    this._email = email;
}

get telefone(): number {
    return this._telefone;
}

set telefone(telefone: number) {
    this._telefone = telefone;
}

get endereco(): string {
    return this._endereco;

}

set endereco(endereco: string) {
    this._endereco = endereco;
}

get qtdPedidos(): number {
    return this._qtdPedidos;

}

set qtdPedidos(qtdPedidos: number) {
    this._qtdPedidos = qtdPedidos;

}

public criarContaCliente(nome: string, cpf: number, senha: string, email: string, telefone: number, endereco: string): void {
    super.criarConta(nome, cpf);
    this._senha = senha;
    this._email = email;
    this._telefone = telefone;
    this._endereco = endereco;
}

}