/*
 * Factory class to define and create mysql
 * functions that are easily retrievable.
 */

/*jslint node: true */
var fileLoader = require('./fileLoader');


module.exports = function(sqlPath, execute) {
  var sql = {};

  //create sql function
  function _createSqlFunc(raw) {
    return function executeRaw(params) {
      return execute(raw, params);
    };
  }

  //load sql files and store them as functions
  fileLoader.loadSql(sqlPath, function (file, content) {
    sql[file] = _createSqlFunc(content);
  });

  return sql;
};
