//create connection pool
let mysql = require('mysql');
class Connection {
    constructor(pool) {
        this.pool = pool;
    }

    init() {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'usersdb'
        });
    }; 

    acquire(callback) {
        this.pool.getConnection((err, connection) => {
            callback(err, connection);
        });
    };
}

module.exports = new Connection();
