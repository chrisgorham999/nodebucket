/*
======================================
; Title: task-management-routing.module.ts
; Author: Chris Gorham
; Date Created: 16 August 2023
; Last Updated: 17 August 2023
; Description: This code supports routes for the Task Management Module
; Sources Used: N/A
;=====================================
*/

// imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagementComponent } from './task-management.component';
import { TasksComponent } from './tasks/tasks.component';

// routes
const routes: Routes = [
  {
    path: '',
    component: TaskManagementComponent,
    children: [
      {
        path: 'my-tasks',
        component: TasksComponent,
        title: 'Nodebucket: My Tasks'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagementRoutingModule { }
