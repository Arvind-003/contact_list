//require the library
const mongoose = require('mongoose');
//mongoose connected to database using below line
mongoose.connect('mongodb://localhost/contacts_list_db');
//mongoose used connect() function to connect to contacts_list_db


//aquire the connection to check whether mongoose is connected or not
//when mongoose is connected this connection give access to database
const db = mongoose.connection;
//this db is used to access the database

//if there is any error ,i want want to bind error and print it on console
db.on('error', console.error.bind(console, 'error connecting to db'));

//if connection is successfull(i.e,dp is now available to interect with      database), and we print message on the console
db.once('open', function () {
    console.log('successfully connected to database');
});