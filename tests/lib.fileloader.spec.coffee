should = require 'should'
fileLoader = require '../lib/fileLoader'

sqlconnector = require('../lib/connector/sql')({
  host     : 'localhost',
  user     : 'mysql'
})
factory = require('../lib/factory')
sql = factory('tests/sql', sqlconnector)

describe 'FactorySpec', ->
  it 'should pass', ->
    sql.getUser(1).then( (results) ->
      console.log(results)
    ).error( (err) ->
      console.log(err)
    )



