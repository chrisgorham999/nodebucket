/*
======================================
; Title: task-management.module.ts
; Author: Chris Gorham
; Date Created: 16 August 2023
; Last Updated: 17 August 2023
; Description: This code supports the Task Management Module
; Sources Used: N/A
;=====================================
*/

// imports 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaskManagementRoutingModule } from './task-management-routing.module';
import { TaskManagementComponent } from './task-management.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    TaskManagementComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    TaskManagementRoutingModule
  ]
})
export class TaskManagementModule { }
