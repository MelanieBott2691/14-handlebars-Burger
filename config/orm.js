// Import MySQL connection to create a connection to the entire application
var connection = require("../config/connection.js");

// create question marks function
// function createQmarks(num) {
//   var arr = [];
//   for(var i = 0; i < num; i++){
//     arr.push("?");
//   }
//   return arr.toString();
// }
  //turn the string into a readable query
function translateSql(ob) {
  var arr = [];
  for(var key in ob){
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if(typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // push the array
      arr.push(key + "=" + value)
    }
  }
  return arr.toString();
}
// Create a variable called ORM and export it with all selections and queries
var orm = {
  all: function(tableInput, cb) {
    var dbQuery = "SELECT * FROM " + tableInput + ";";
    connection.query(dbQuery, function(err, result) {
      if(err) {
        throw err;
      }
      // callback
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    // var dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";
    var dbQuery = "INSERT INTO " + table;
    dbQuery += " (";
    dbQuery += cols.toString();
    dbQuery += ") ";
    dbQuery += "VALUES (";
    dbQuery += ") ";

    console.log(dbQuery);
    connection.query(dbQuery, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function(table, objColVals, condition, cb) {
    var dbQuery= "UPDATE " + table;
    
    dbQuery += " SET ";
    dbQuery += translateSql(objColVals);
    dbQuery += " WHERE ";
    dbQuery += condition;

    console.log(dbQuery);
    connection.query(dbQuery, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var dbQuery = "DELETE FROM " + table;
    dbQuery += "WHERE ";
    dbQuery += condition;
    
    connection.query(dbQuery, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object
module.exports = orm;
