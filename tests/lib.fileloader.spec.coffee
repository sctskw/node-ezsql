should = require 'should'
fileLoader = require '../lib/fileLoader'

config =
  host: 'localhost'
  user: 'mysql'

sql = require('../lib')('tests/sql', config)

describe 'FactorySpec', ->
  it 'should pass', ->
    sql.getUser(2).then( (results) ->
      console.log(results)
    ).error( (err) ->
      console.log(err)
    )



