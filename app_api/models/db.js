const mongoose = require('mongoose');

let dbURI = 'mongodb://localhost/cupfi';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MLAB_URI;
}
mongoose.connect(dbURI, {useNewUrlParser: true});


// const { MongoClient } = require('mongodb');
// const uri = process.env.MLAB_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("cupfi").collection("cupfi");
//   // perform actions on the collection object
//   client.close();
// });

//mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err=>{
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', ()=>{
    console.log('Mongoose disconnected');
});


//to notify when connection ended
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(()=>{
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};


/// Listeners for connection shutdown ////
process.once('SIGUSR2', () => {             //nodemon shutdown
    gracefulShutdown('nodemon restart', ()=>{
        process.kill(process.pid, 'SIGUSR2');
    })
})
process.on('SIGINT', () => {                //reg shutdown
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
process.on('SIGTERM', () => {               //Heroku shutdown
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0)
    })
})

require('./locations');