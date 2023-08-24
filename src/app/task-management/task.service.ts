/*
======================================
; Title: task.service.ts
; Author: Chris Gorham
; Date Created: 15 August 2023
; Last Updated: 23 August 2023
; Description: This code supports the Nav Component
; Sources Used: N/A
;=====================================
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './tasks/item.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
    
    getTask(empId: number) {
      return this.http.get('/api/employees/' + empId + '/tasks')
    }

    addTask(empId: number, task: Item) {
      return this.http.post('/api/employees/' + empId + '/tasks', { task })
    }
  }

