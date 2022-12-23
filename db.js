require('dotenv').config()
const mongoose = require("mongoose");


// let mongooseURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.co7nqvi.mongodb.net/mern-excursions`


mongoose.connect(process.env.DB_URI, {useUnifiedTopology : true, useNewUrlParser : true });


let connection = mongoose.connection;

connection.on('error', ()=> {
    console.log('MongoDB Connection Failed! ❌')
});

connection.on('connected', ()=>{
    console.log('MongoDB Connection Successful ✔️')
});

module.exports = mongoose;