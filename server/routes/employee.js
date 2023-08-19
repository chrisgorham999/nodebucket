/*
======================================
; Title: employee.js
; Author: Chris Gorham
; Date Created: 14 August 2023
; Last Updated: 15 August 2023
; Description: This code supports the employee route
; Sources Used: Bellevue University WEB-450 Boot Camp Live Classes
;=====================================
*/

'use strict'

// imports / requires
const express = require('express')
const router = express.Router()
const { mongo } = require('../utils/mongo')

// findEmployeeById function
router.get('/:empId', (req, res, next) => {
    try {
        console.log('empId', req.params.empId)
        let { empId } = req.params // get the empId from the req.params object
        empId = parseInt(empId, 10) // try to determine if the empId is a numerical value

        if (isNaN(empId)) {
            const err = new Error('input must be a number')
            err.status = 400
            console.log('err', err)
            next(err)
            return
        }

        mongo(async db => {

        const employee = await db.collection('employees').findOne({ empId }) // find employee by ID

        // if you can't find an employee in the system, return a 404 error message
        if (!employee) {
            const err = new Error('Unable to find employee with ID ' + empId)
            err.status = 404
            console.log('err', err)
            next(err)
            return
        }
        res.send(employee)
        }, next)

    } catch(err) {
        console.log('err', err)
        next(err)
    }
})


// exports router
module.exports = router;