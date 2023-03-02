//connecting to database using mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/usersdb");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open" , function() { console.log("connected to db"); } );

