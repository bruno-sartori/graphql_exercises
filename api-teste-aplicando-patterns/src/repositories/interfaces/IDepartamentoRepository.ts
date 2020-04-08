import IDepartamentoModel from "../../models/interfaces/IDepartamentoModel";

export interface IDepartamentoListParameters {
    currentPage?: number;
    pageSize?: number;
    sorter?: string;
    status?: boolean;
    txt?: string;
}

export interface IDepartamentoTotalsParameters {
    txt?: string;
}

export default interface IDepartamentoRepository {
    getById(id: number): Promise<any>;

    list(params: IDepartamentoListParameters): Promise<any>;

    getTotals(params: IDepartamentoTotalsParameters): Promise<any>;

    create(departamento: IDepartamentoModel): Promise<any>;

    update(id: number, departamento: IDepartamentoModel): Promise<any>;

    delete(id: number): Promise<any>;
}
