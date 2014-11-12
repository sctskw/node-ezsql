var mysql = require('mysql');
var Promise = require('bluebird');


module.exports = function(config) {

  var conn = mysql.createConnection(config);
  conn.connect();

  return function executeSql(sql, params) {
    return new Promise(function(resolve, reject) {
      return conn.query(sql, params, function(err, rows, fields) {
        return err ? reject(err) : resolve(rows, fields);
      });
    });
  };
};
