/*
======================================
; Title: app.js
; Author: Chris Gorham
; Date Created: 14 August 2023
; Last Updated: 18 August 2023
; Description: This code supports the app and exports the server
; Sources Used: 
; Bellevue University WEB-450 GitHub
; Bellevue University WEB-450 Boot Camp Live Classes
; How to add Swagger UI to an existing Node.js and Express.js project
https://levelup.gitconnected.com/how-to-add-swagger-ui-to-existing-node-js-and-express-js-project-2c8bad9364ce
;=====================================
*/

'use strict'

// Require statements
const express = require('express')
const createServer = require('http-errors')
const path = require('path')
const employeeRoute = require('./routes/employee')
const swaggerUi = require("swagger-ui-express");
const api_docs = require('../api-docs.json')


// Create the Express app
const app = express()

// Configure the app
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../dist/nodebucket')))
app.use('/', express.static(path.join(__dirname, '../dist/nodebucket')))
app.use('/api/employees', employeeRoute)


// Swagger Setup & wiring
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(api_docs))


// error handler for 404 errors
app.use(function(req, res, next) {
  next(createServer(404)) // forward to error handler
})

// error handler for all other errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500) // set response status code

  // send response to client in JSON format with a message and stack trace
  res.json({
    type: 'error',
    status: err.status,
    message: err.message,
    stack: req.app.get('env') === 'development' ? err.stack : undefined
  })
})

module.exports = app // export the Express application