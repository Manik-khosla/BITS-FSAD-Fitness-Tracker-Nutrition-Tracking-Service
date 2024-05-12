const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, "./.env")
})
const retryInterval = 5000 + Math.random() * 6000;
isConnected = false;
const connectToMongoDB = () => {
    const conn = mongoose.connect(process.env.MONGODBSTR||"mongodb://localhost/fitness_tracker", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            isConnected = true;
            console.log('EXPRESS SERVER IS SUCSSFULLY CONNECTED WITH DATABASE ....!!');
        })
        .catch((err) => {
            console.error('Error connecting to Mongo', err);
        });
}
module.exports = connectToMongoDB;
function checkMongoDBConnection() {
    if (!isConnected) {
        console.log('Retrying MongoDB connection...');
        connectToMongoDB();
    }
    setTimeout(checkMongoDBConnection, retryInterval);
}
setTimeout(checkMongoDBConnection, 100000);









