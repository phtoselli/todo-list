const { MongoClient } = require('mongodb');

const { ME_CONFIG_MONGODB_URL } = process.env;
const MONGO_DB_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

module.exports = mongoConnection = async () =>
  await MongoClient
    .connect(ME_CONFIG_MONGODB_URL, MONGO_DB_CONFIG);
