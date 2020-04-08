import IDepartamentoModel from './interfaces/IDepartamentoModel';

class DepartamentoModel {
    private departamentoModel: IDepartamentoModel;

    constructor(departamentoModel: IDepartamentoModel) {
        this.departamentoModel = departamentoModel;
    }

    get id(): number {
        return this.departamentoModel.id;
    }

    get nome(): string {
        return this.departamentoModel.nome;
    }

    get status(): boolean {
        return this.departamentoModel.status;
    }

    get createdAt(): Date {
        return this.departamentoModel.createdAt;
    }

    get updatedAt(): Date {
        return this.departamentoModel.updatedAt;
    }
}

Object.seal(DepartamentoModel);

export default DepartamentoModel;
