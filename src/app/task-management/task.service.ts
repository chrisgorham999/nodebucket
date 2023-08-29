/*
======================================
; Title: task.service.ts
; Author: Chris Gorham
; Date Created: 23 August 2023
; Last Updated: 23 August 2023
; Description: This code supports the Task Service
; Sources Used: N/A
;=====================================
*/

// imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './tasks/item.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
    
    // calls via http client to the server for retrieving a task
    getTask(empId: number) {
      return this.http.get('/api/employees/' + empId + '/tasks')
    }
    // calls via http client to the server for adding a task
    addTask(empId: number, task: Item) {
      return this.http.post('/api/employees/' + empId + '/tasks', { task })
    }

    // calls via http client to the server for updating a task
    updateTask(empId: number, todo: Item[], done: Item[]) {
      return this.http.put('/api/employees/' + empId + '/tasks', {
        todo,
        done
      })
    }
    
    // calls via http client to the server for deleting a task
    deleteTask(empId: number, taskId: string) {
      return this.http.delete('/api/employees/' + empId + '/tasks/' + taskId)
    }
  }

