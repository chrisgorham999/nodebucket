/*
======================================
; Title: tasks.component.ts
; Author: Chris Gorham
; Date Created: 16 August 2023
; Last Updated: 27 August 2023
; Description: This code supports the Task Component
; Sources Used: N/A
;=====================================
*/

// imports
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Employee } from './employee.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from './item.interface';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  // variables
  employee: Employee
  empId: number
  todo: Item[]
  done: Item[]
  errorMessage: string
  successMessage: string

  // form validators
  newTaskForm: FormGroup = this.fb.group({
    text: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
    category: [null]
  })

 constructor(private cookieService: CookieService, private taskService: TaskService, private fb: FormBuilder) {
    // setup variables
    this.employee = {} as Employee
    this.todo = []
    this.done = []
    this.errorMessage = ''
    this.successMessage = ''
    
    // parse number from the user empId entry
    this.empId = parseInt(this.cookieService.get('session_user'), 10)

    // calls the get task function to load when the page loads
    this.taskService.getTask(this.empId).subscribe({
      next: (emp: any) => {
        console.log('emp', emp)
        this.employee = emp
      },
      error: (err) => {
        console.log('error', err)
        this.errorMessage = err.message
      },
      complete: () => {
        console.log('complete')

        this.todo = this.employee.todo ? this.employee.todo : []
        this.done = this.employee.done ? this.employee.done : []
        // console log for troubleshooting purposes
        console.log('todo', this.todo)
        console.log('done', this.done)
      }
    })
 }


 // the function to add a task
 addTask() {
  // define variables and pull data from the form
  const text = this.newTaskForm.controls['text'].value
  const category = this.newTaskForm.controls['category'].value

  // if there isn't a category, set the error message accordingly
  if (!category) {
    this.errorMessage = 'Please provide a category'
    this.hideAlert()
    return
  }

  let newTask = this.getTask(text, category)

  // calls to the task service to add a task
  this.taskService.addTask(this.empId, newTask).subscribe({
    next: (task: any) => {
      console.log('Task added with id', task.id)
      newTask._id = task.id // set the new task
      this.todo.push(newTask) // pushes task to the todo array
      this.newTaskForm.reset()
      this.successMessage = 'Task added successfully'
      this.hideAlert()
  },
  error: (err) => {
    this.errorMessage = err.message
    this.hideAlert()
  }
})
 }

 // called when the user hits the delete button
 deleteTask(taskId: string) {
  console.log('Task item: ', taskId) // helps with troubleshooting

  if (!confirm('Are you sure you want to delete this task?')) {
    return
  }
 
  this.taskService.deleteTask(this.empId, taskId).subscribe({
    next: (res: any) => {
      console.log('Task deleted with ID: ', taskId)

      if (!this.todo) this.todo = [] // if the todo array is null
      if (!this.done) this.done = [] // if the done array is null

      this.todo = this.todo.filter(t => t._id?.toString() !== taskId)
      this.done = this.done.filter(t => t._id?.toString() !== taskId)

      this.successMessage = 'Task deleted successfully!'
      this.hideAlert() // fades out the error message after 3 seconds
    },
    error: (err) => {
      console.log('err', err)
      this.errorMessage = err.message
      this.hideAlert() // fades out the error message after 3 seconds
    }
  })
  

 }

 // disappears the alert after 3 seconds by resetting the message to empty
 hideAlert() {
  setTimeout(() => {
    this.errorMessage = ''
    this.successMessage = ''
  }, 3000)
 }

 // the get task function
 getTask(text: string, categoryName: string) {

  let task: Item = {} as Item
  
  // define colors
  const white = '#FFFFFF'
  const green = '#1a472a'
  const grey = '#5d5d5d'
  const black = '#000000'

  // switch that sets the category button background color depending on the category selected
  switch (categoryName) {
    case 'testing': 
     task = {
      text: text,
      category: {
        categoryName: categoryName,
        backgroundColor: green
      }
     }
     return task
     case 'meetings':
      task = {
        text: text,
        category: {
          categoryName: categoryName,
          backgroundColor: grey
        }
       }
       return task
      case 'projects':
      task = {
        text: text,
        category: {
          categoryName: categoryName,
          backgroundColor: black
        }
       }
       return task
       default:
        task = {
          text: text,
          category: {
            categoryName: categoryName,
            backgroundColor: white
          }
         }
         return task
  }
 }



}
