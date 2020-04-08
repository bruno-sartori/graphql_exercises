import knex from 'knex';

const db = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'oton',
        password: 'zeta@odin@145',
        database: 'isp_dev'
    },
});

export default db;