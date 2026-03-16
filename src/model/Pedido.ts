

export class Pedido {

private _id!: number;
private _clienteId!: number;
private _valorTotal: number = 0;
private _status: number = 0; // 0 - Pendente, 1 - Em andamento, 2 - Concluído
private _statusPagamento: boolean = false; //
private _produtoId!: number;
private _quantidade!: number;
private _precoProduto!: number; 

constructor() {}

public get id(): number {
    return this._id;
}

public set id(id: number) {
    this._id = id;
}

public get clienteId(): number {
    return this._clienteId;
}

public set clienteId(clienteId: number) {
    this._clienteId = clienteId;
}

public get valorTotal(): number {
    return this._valorTotal;
}

public set valorTotal(valorTotal: number) {
    this._valorTotal = valorTotal;
}

public get status(): number {
    return this._status;
}

public set status(status: number) {
    this._status = status;
}

public get statusPagamento(): boolean {
    return this._statusPagamento;
}

public set statusPagamento(statusPagamento: boolean) {
    this._statusPagamento = statusPagamento;
}

public get produtoId(): number {
    return this._produtoId;
}

public set produtoId(produtoId: number) {   
    this._produtoId = produtoId;
}

public get quantidade(): number {
    return this._quantidade;
}   

public set quantidade(quantidade: number) {
    this._quantidade = quantidade;
}

public get precoProduto(): number {
    return this._precoProduto;
}

public set precoProduto(precoProduto: number) {
    this._precoProduto = precoProduto;
}

public criarPedido(clienteId: number, produtoId: number, quantidade: number, precoProduto: number): void {
    this._clienteId = clienteId;
    this._produtoId = produtoId;
    this._quantidade = quantidade;
    this._precoProduto = precoProduto;
    this._valorTotal = quantidade * precoProduto;
    this._status = 0;
    this._statusPagamento = false;


}

}