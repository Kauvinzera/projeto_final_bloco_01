export abstract class Cadastro {

private _nome!: string;
private _id!: number;


public constructor() {
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



}