/*
======================================
; Title: config.js
; Author: Chris Gorham
; Date Created: 21 August 2023
; Last Updated: 21 August 2023
; Description: This code supports secure / masked connection to the Mongo database for the project through variables for the user/password/db name
; Sources Used: Bellevue University WEB-450 Boot Camp Live Classes
;=====================================
*/

'use strict'

const {
  DB_USERNAME = 'nodebucket_user',
  DB_PASSWORD = 's3cret',
  DB_NAME = 'nodebucket'
} = process.env

const CONFIG = {
 DB_URL: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@bellevueuniversity.up6klva.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
 DB_NAME: DB_NAME
}

// export
module.exports = CONFIG