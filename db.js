const mongoose = require("mongoose");

// let mongooseURL = 'mongodb+srv://jobas:B0cJbAaNVRxH3alN@cluster0.co7nqvi.mongodb.net/mern-excursions'
let mongooseURL = 'mongodb+srv://jobas:B0cJbAaNVRxH3al@cluster0.co7nqvi.mongodb.net/?retryWrites=true&w=majority'
// mongoose.connect(mongooseURL, {useUnifiedTopology : true, useNewUrlParser : true });
mongoose.connect(mongooseURL, {useUnifiedTopology : true, useNewUrlParser : true,
serverApi: ServerApiVersion.v1 });

let connection = mongoose.connection;

connection.on('error', ()=> {
    console.log('MongoDB Connection Failed! ❌')
});

connection.on('connected', ()=>{
    console.log('MongoDB Connection Successful ✔️')
});

module.exports = mongoose;