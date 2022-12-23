require('dotenv').config()
const mongoose = require("mongoose");


mongoose.connect(process.env.DB_URI, {useUnifiedTopology : true, useNewUrlParser : true });


let connection = mongoose.connection;

connection.on('error', ()=> {
    console.log('MongoDB Connection Failed! ❌')
});

connection.on('connected', ()=>{
    console.log('MongoDB Connection Successful ✔️')
});

module.exports = mongoose;