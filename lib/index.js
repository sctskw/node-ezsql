var connector = require('./connector').mysql;
var factory = require('./factory');

module.exports = function(sqlPath, sqlConfig) {
  return factory(sqlPath, connector(sqlConfig));
};
