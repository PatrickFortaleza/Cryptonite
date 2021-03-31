const { MongoClient } = require('mongodb');

const username = process.env.AWS_USERNAME;
const password = process.env.AWS_PASSWORD;
const url = process.env.AWS_URL

const DB_NAME = 'TekkenMatchup';
const MONGODB_URI = `mongodb+srv://${username}:${encodeURIComponent(password)}@${url}/${DB_NAME}`;

const connectToDatabase = async () => {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db(DB_NAME);
  return db;
}

module.exports = connectToDatabase;
