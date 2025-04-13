const mongoose = require('mongoose');

const connectDatabase = async() => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.DB_LOCAL_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB is connected  `)
    }
     catch(err){
        console.error(err.message);
        // make the process fail
        process.exit(1);
     }
}

module.exports = connectDatabase;
