should = require 'should'
lib = require '../lib'

describe 'LibSpec', ->
  it 'should pass', ->
    lib.testItem.should.equal('testing')
