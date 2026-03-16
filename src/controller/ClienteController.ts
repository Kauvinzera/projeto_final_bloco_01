import { CadastroCliente } from "../model/CadastroCliente";
import { ClienteRepository } from "../repository/ClienteRepository";

export class ClienteController implements ClienteRepository {

    private listaContas: Array<CadastroCliente> = new Array<CadastroCliente>();
  

    cadastrar(conta: CadastroCliente): void {
        conta.criarContaCliente(conta.nome, conta.id, conta.senha, conta.email, conta.telefone, conta.endereco);
        this.listaContas.push(conta);
        console.log("\nConta criada com sucesso!\n");
    }

    atualizar(conta: CadastroCliente): void {
        let contaExistente = this.buscarNoArray(conta.id);
        if (contaExistente !== null) {
            contaExistente.nome = conta.nome;
            contaExistente.senha = conta.senha;
            contaExistente.email = conta.email;
            contaExistente.telefone = conta.telefone;
            contaExistente.endereco = conta.endereco;
            console.log("\nConta atualizada com sucesso!\n");
        } else {
            console.log("\nConta não encontrada. Por favor, verifique o CPF da conta.\n");
        }
    }

    deletar(numero: number): void {
        let contaExistente = this.buscarNoArray(numero);
        if (contaExistente !== null) {
        this.listaContas.splice(this.listaContas.indexOf(contaExistente), 1);
        console.log("\nConta deletada com sucesso!\n");
    } else {
        console.log("\nConta não encontrada. Por favor, verifique o CPF da conta.\n");
    }
      
}

    visualizar(numero: number): void {
        let contaExistente = this.buscarNoArray(numero);
        if (contaExistente !== null) {
            console.log("\nDetalhes da Conta:\n");
            console.log("Nome: " + contaExistente.nome);
            console.log("CPF: " + contaExistente.id);
            console.log("Email: " + contaExistente.email);
            console.log("Telefone: " + contaExistente.telefone);
            console.log("Endereço: " + contaExistente.endereco);
        } else {
            console.log("\nConta não encontrada. Por favor, verifique o CPF da conta.\n");
        }
    }


    entrar(numero: number, senha: string): CadastroCliente | null {
        let contaExistente = this.buscarNoArray(numero);
        if (contaExistente !== null) {
            if (contaExistente.senha === senha) {
                console.log("\nLogin bem-sucedido! Seja bem-vindo " + contaExistente.nome + " à Office SetupZ com Z!\n");
                return contaExistente;
            } else {
                console.log("\nSenha incorreta. Por favor, tente novamente.\n");
                return null;
            }
        } else {
            console.log("\nCPF nao cadastrado. Por favor, tente novamente.\n");
            return null;
        }
    }

    pagar(numero: number): void {

    }

public buscarNoArray(numero: number): CadastroCliente | null { // entra com numero da conta e retorna a conta ou null
    for (let conta of this.listaContas) {
        if (conta.id === numero) {
            return conta;
        }
    }
    return null;
}

public quantidadeContas(): number {
    return this.listaContas.length;

}

public listarContas(): void {
    if (this.listaContas.length === 0) {
        console.log("\nNenhuma conta cadastrada.\n");
    } else {
        console.log("\nLista de Contas Cadastradas:\n");
        for (let conta of this.listaContas) {
            console.log(`Nome: ${conta.nome}, CPF: ${conta.id}, Email: ${conta.email}`);
        }
    }

}

}
