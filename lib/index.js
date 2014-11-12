var Factory = require('./factory');
module.exports = function(sqlPath) {
  return new Factory(sqlPath);
};
