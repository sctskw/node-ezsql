var mysql = require('mysql');
var Promise = require('bluebird');


module.exports = function(config) {

  //@TODO: utilize connection pooling to alleviate on-demand
  //connections
  var conn = mysql.createConnection(config);

  return function executeSql(sql, params) {
    return new Promise(function(resolve, reject) {
      conn.connect(); //start connection
      return conn.query(sql, params, function(err, rows, fields) {
        conn.end(); //end connection
        return err ? reject(err) : resolve(rows, fields);
      });
    });
  };
};
