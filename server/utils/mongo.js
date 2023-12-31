/*
======================================
; Title: mongo.js
; Author: Chris Gorham
; Date Created: 14 August 2023
; Last Updated: 15 August 2023
; Description: This code supports connection to the Mongo database for the project
; Sources Used: Bellevue University WEB-450 Boot Camp Live Classes
;=====================================
*/

'use strict'

// requires mongoDb
const { MongoClient } = require('mongodb')

// imports
const config  = require('./config')

// connection string to connect to the db
const MONGO_URL = config.DB_URL

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
        const db = client.db(config.DB_NAME)
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