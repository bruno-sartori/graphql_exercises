import IDepartamentoRepository, { IDepartamentoListParameters, IDepartamentoTotalsParameters } from './interfaces/IDepartamentoRepository';
import database from '../database';
import { QueryBuilder } from 'knex';
import IDepartamentoModel from '../models/interfaces/IDepartamentoModel';

class DepartamentoRepository implements IDepartamentoRepository {

    async getById(id: number): Promise<any> {
        return database.select()
            .from('departamentos')
            .where('id', id)
            .first();
    }

    async list(params: IDepartamentoListParameters): Promise<any> {
        const { currentPage = 1, pageSize = 10, sorter = '', status, txt } = params;
        const offset = pageSize * Math.max(0, currentPage) - pageSize;
        
        return database.select()
            .from('departamentos')
            .modify((queryBuilder) => {
                queryBuilder.offset(offset);
               
                if (typeof sorter !== 'undefined' && sorter !== null && sorter !== '') {
                    queryBuilder.orderBy(sorter.split('_')[0], sorter.split('_')[1]);
                }
                
                if (typeof status !== 'undefined' && status !== null) {
                    queryBuilder.where('status', status);
                }

                if (typeof txt !== 'undefined' && txt !== null && txt !== '') {
                    queryBuilder.where('nome', 'like', `%${txt}%`);
                }
            })
            .limit(pageSize);
    }

    async getTotals(params: IDepartamentoTotalsParameters): Promise<any> {
        const { txt } = params;

        const queryCallback = (status: boolean) => (queryBuilder: any) => {
            if (typeof txt !== 'undefined' && txt !== null && txt !== '') {
                queryBuilder.where('nome', 'like', `%${txt} %`);
            }
            queryBuilder.where('status', status);
        };

        const [ativos, desativados, total] = await Promise.all([
            database.count({ count: '*' })
                .from('departamentos')
                .modify(queryCallback(true))
                .first()
                .then((result = {}) => result.count),
            database.count({ count: '*' })
                .from('departamentos')
                .modify(queryCallback(false))
                .first()
                .then((result = {}) => result.count),
            database.count({ count: '*' })
                .from('departamentos')
                .first()
                .then((result = {}) => result.count)
        ]);

        return { ativos, desativados, total };
    }

    async create(departamento: IDepartamentoModel): Promise<any> {
        const { nome, status } = departamento;

        return database.insert({ nome, status })
        .into('departamentos')
        .then(ids => {
            console.log(ids);
            return this.getById(ids[0]);
        });
    }

    async update(id: number, departamento: IDepartamentoModel): Promise<any> {
        const { nome, status } = departamento;

        return database.table('departamentos')
        .where('id', id)
        .modify((queryBuilder) => {
            if (typeof nome !== 'undefined' && nome !== null) {
                queryBuilder.update('nome', nome);
            }

            if (typeof status !== 'undefined' && status !== null) {
                queryBuilder.update('status', status);
            }

            queryBuilder.update('updatedAt', new Date());
        })
        .then(updatedRows => {
            if (updatedRows.length === 0) {
                throw new Error('Departamento not found!');
            }
            return updatedRows;
        }).then(() => {
            return this.getById(id);
        });
    }

    async delete(id: number): Promise<any> {
        return database.table('departamentos').where('id', id).del();
    }
}

export default DepartamentoRepository;
