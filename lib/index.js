var sqlconnector = require('./connector/sql');
var factory = require('./factory');

module.exports = function(sqlPath, sqlConfig) {
  return factory(sqlPath, sqlconnector(sqlConfig));
};
