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
  }

