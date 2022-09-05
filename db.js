const dotenv = require('dotenv')
dotenv.config()

const {MongoClient} = require('mongodb')

const client = new MongoClient(process.env.CONNECTIONSTRING)