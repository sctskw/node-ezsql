node-ezsql
==========

pure sql solution for node.js

Why?
----

 - ORM's can be overcomplicated
 - JS/Node long strings are ugly in code
 - Pure SQL is easier to read/search/modify
 - Syntax checkers are .sql friendly

How?
----
By using a directory structure, the filename, and the .sql file extension we automatically generate a factory of sql functions that can be called with ease. This allows you to write SQL as you would anywhere else, and forget about the rest.


Usage
-----

### Write your queries
*assuming path: ./sql/path/*

    filename: ./sql/path/getUser.js

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

    output:

        [{
            id: 2,
            name: 'Sam Adams',
            email: 'sam.adams@boston.com',
            date_added: Wed Nov 12 2014 00:35:03 GMT-0700 (MST)
        }]

Caveats
-------
Due to limitations with async handling and the filesystem, this module is currently synchronous. In order to generate functions using filesystem data, the module waits for each file to be loaded into memory before it can make the generated function available at the module level.

Future
------
- fully support async by using promises or non-blocking sync
- utilize subdirectories to create namespaces
    - eg. sql.users.fetchAll()
