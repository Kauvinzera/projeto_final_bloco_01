import { Cliente } from "../model/Cliente";


export interface ClienteRepository {

    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Cliente): void;
    atualizar(conta: Cliente): void;
    deletar(numero: number): void;

    entrar(numero: number, senha: string): void;
    pagar(numero: number): void;
    



}