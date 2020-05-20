const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database : 'lemon'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});