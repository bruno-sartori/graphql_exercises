import IClienteRepository, { IClienteListParameters, IClienteTotalsParameters } from './interfaces/IClienteRepository';
import database from '../database';
import moment from 'moment';
import IClienteModel from '../models/interfaces/IClienteModel';

class ClienteRepository implements IClienteRepository {

    async getById(id: number): Promise<any> {
        return database.select()
            .from('clientes')
            .where('id', id)
            .first();
    }

    async list(params: IClienteListParameters): Promise<any> {
        const { currentPage = 1, pageSize = 10, sorter = '', status, txt } = params;
        const offset = pageSize * Math.max(0, currentPage) - pageSize;
        
        return database.select()
            .from('clientes')
            .modify((queryBuilder) => {
                queryBuilder.offset(offset);
               
                if (typeof sorter !== 'undefined' && sorter !== null && sorter !== '') {
                    queryBuilder.orderBy(sorter.split('_')[0], sorter.split('_')[1]);
                }
                
                if (typeof status !== 'undefined' && status !== null) {
                    queryBuilder.where('status', status);
                }

                if (typeof txt !== 'undefined' && txt !== null && txt !== '') {
                    queryBuilder.where('nomeFantasia', 'like', `%${txt}%`);
                }
            })
            .limit(pageSize);
    }

    async getTotals(params: IClienteTotalsParameters): Promise<any> {
        const { txt } = params;

        const queryCallback = (status: string) => (queryBuilder: any) => {
            if (typeof txt !== 'undefined' && txt !== null && txt !== '') {
                queryBuilder.where('nomeFantasia', 'like', `%${txt} %`);
            }
            queryBuilder.where('status', status);
        };

        const [liberados, bloqueados, desativados, total] = await Promise.all([
            database.count({ count: '*' })
                .from('clientes')
                .modify(queryCallback('LIBERADO'))
                .first()
                .then((result = {}) => result.count),
            database.count({ count: '*' })
                .from('clientes')
                .modify(queryCallback('BLOQUEADO'))
                .first()
                .then((result = {}) => result.count),
            database.count({ count: '*' })
                .from('clientes')
                .modify(queryCallback('DESATIVADO'))
                .first()
                .then((result = {}) => result.count),
            database.count({ count: '*' })
                .from('clientes')
                .first()
                .then((result = {}) => result.count)
        ]);

        return { liberados, bloqueados, desativados, total };
    }

    async create(cliente: IClienteModel): Promise<any> {
        return database.insert(cliente)
        .into('clientes')
        .then(ids => {
            console.log(ids);
            return this.getById(ids[0]);
        });
    }

    async update(id: number, cliente: IClienteModel): Promise<any> {
        cliente.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');

        return database.table('clientes')
        .where('id', id)
        .update(cliente)
        .then((updatedRows: any) => {
            if (updatedRows.length === 0) {
                throw new Error('Cliente not found!');
            }
            return updatedRows;
        }).then(() => {
            return this.getById(id);
        });
    }

    async delete(id: number): Promise<any> {
        return database.table('clientes').where('id', id).del();
    }
}

export default ClienteRepository;
