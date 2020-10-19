import mysql from 'promise-mysql'
import database from './database'

const pool = mysql.createPool(database.database);

pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('Database conectada');
});

export default pool;