/*
 *
 * Utility for reading .sql files from their directory
 * structure.
 *
 */

var fs = require('fs');
var path = require('path');
var glob = require('glob');
var _ = require('lodash');


var validExtensions = ['.sql'];

//@TODO: use promises
//@TODO: add ability for namespaces using directory structure
function readSqlFile (file, callback) {
  var fileName = path.basename(file, '.sql');
  //@TODO: look into using async. since the constructor will depend
  //on doing these reads, there may not be another way around it.
  var content = fs.readFileSync(file);

  //this won't be called until file content is loaded
  //desired behavior for now
  callback(fileName, content.toString());

}

//@TODO: use promises
function findSqlFiles (filePath, fileCallback) {
  var real = path.resolve(filePath),
      sqlGlob = path.join(real, '**/*.sql');

  /*jslint stupid: true */
  if(!fs.existsSync(real)) {
    throw new Error('PathName does not exist');
  }
  /*jslint stupid: false */

  glob(sqlGlob, {}, function(err, files) {
    if(err) {
      throw new Error(err.message);
    }

    _.forEach(files, function(file) {
      readSqlFile(file, fileCallback);
    });

  });

}

module.exports = {
  loadSql: findSqlFiles
};
