const mysql = require('mysql');

const SQLpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'timeplan'
  });

  module.exports = SQLpool;
  
  SQLpool.getConnection((err, connection) => {
    if (!err) {
      console.log('Connection Successful')

    } else {
      console.error(err.message);
      connection.release();
    }
  });