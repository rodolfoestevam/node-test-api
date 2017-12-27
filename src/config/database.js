import mongoose from 'mongoose';

mongoose.Promise = Promise;

const mongodUri = process.env.MONGODB_URL || 'mongodb://localhost/test';

const connect = () => mongoose.connect(mongodUri, {
    useMongoClient: true
});

export default {
    connect
}