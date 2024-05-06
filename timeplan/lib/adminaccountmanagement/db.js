const mysql = require('mysql');

const SQLpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'adminaccountmanagement'
  });

  module.exports = SQLpool;
  
  SQLpool.getConnection((err, connection) => {
    if (!err) {
      console.log('Connection Successful')
      return;
    } else {
      console.error(err.message);
      connection.release();
    }
  });