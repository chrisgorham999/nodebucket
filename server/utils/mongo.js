/**
 * Add Attribution
 */

'use strict'

// requires mongoDb
const { MongoClient } = require('mongodb')

// connection string to connect to the nodebucket db
const MONGO_URL = 'mongodb+srv://nodebucket_user:s3cret@bellevueuniversity.up6klva.mongodb.net/nodebucket?retryWrites=true&w=majority'

// mongo async function with a next callback function (ErrBack)
const mongo = async(operations, next) => {
    try { 
        
        console.log('Connecting to MongoDB Atlas...')
        
        // Connect to MongoDB cluster
        const client = await MongoClient.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        // Select the database
        const db = client.db('nodebucket')
        console.log('Connected to MongoDB Atlas', db)

        // Execute the operations
        await operations(db)
        console.log('Operation was successful')

        // Close the connection
        client.close()
        console.log('Closing connection to MongoDB Atlas...')

    } catch (err) {
        const error = new Error('Error connecting to db', err)
        error.status = 500
        console.log('Error connecting to db', err)
        next(error)
    }
}

// exports
module.exports = { mongo }