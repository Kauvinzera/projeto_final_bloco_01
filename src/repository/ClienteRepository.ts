import { CadastroCliente } from "../model/CadastroCliente";


export interface ClienteRepository {

    cadastrar(conta: CadastroCliente): void;
    atualizar(conta: CadastroCliente): void;
    deletar(numero: number): void;
    visualizar(numero: number): void;

    entrar(numero: number, senha: string): CadastroCliente | null;
    pagar(numero: number): void;




}