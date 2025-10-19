require('dotenv').config()
const mongoose = require('mongoose');
let ConnectionString = "mongodb+srv://admin_db_user:Simpson18.@mycluster229.yhhwjdg.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster229"

module.exports = function(){

    mongoose.connect(ConnectionString);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    })

    return mongodb;
}