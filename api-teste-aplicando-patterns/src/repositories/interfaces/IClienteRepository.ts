import IClienteModel from "../../models/interfaces/IClienteModel";

export interface IClienteListParameters {
    currentPage?: number;
    pageSize?: number;
    sorter?: string;
    status?: string;
    txt?: string;
}

export interface IClienteTotalsParameters {
    txt?: string;
}

export default interface IClienteRepository {
    getById(id: number): Promise<any>;

    list(params: IClienteListParameters): Promise<any>;

    getTotals(params: IClienteTotalsParameters): Promise<any>;

    create(departamento: IClienteModel): Promise<any>;

    update(id: number, departamento: IClienteModel): Promise<any>;

    delete(id: number): Promise<any>;
}
