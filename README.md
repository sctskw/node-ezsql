node-ezsql
==========

raw sql solution for node.js

This solutiona allows you to write SQL in it's raw format using .sql files to organize your queries. Since you're writing them in pure sql you are able to utilize any syntax checkers you might have. It also allows you to write complicated queries that otherwise wouldn't be feasible in ORM's. Since the queries are in their raw format, they are also easily searchable in whatever repository they are in.


Usage
-----

### Write your queries
__assuming ./sql/path/__

    //filename: ./sql/path/getUser.js
    SELECT
     *
    FROM test.users

### Create SQL

    var sql = require('ezsql')('./sql/path/')({
        host: 'localhost',
        user: '<someuser>' //omit
    });

### Call SQL

    var users = sql.getUsers().then(function(results){
        console.log(results);
    });

    //eg.
    //  [{
    //      id: 2,
    //      name: 'Sam Adams',
    //      email: 'sam.adams@boston.com',
    //      date_added: Wed Nov 12 2014 00:35:03 GMT-0700 (MST)
    //  }]
