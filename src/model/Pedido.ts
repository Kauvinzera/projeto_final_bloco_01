

export class Pedido {

private _id!: number;
private _clienteId!: number;
private _valorTotal: number = 0;
private _status: number = 0; // 0 - Pendente, 1 - Em andamento, 2 - Concluído
private _statusPagamento: boolean = false; // 

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

}