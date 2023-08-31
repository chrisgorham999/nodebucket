/*
======================================
; Title: task-management.module.ts
; Author: Chris Gorham
; Date Created: 16 August 2023
; Last Updated: 30 August 2023
; Description: This code supports the Task Management Module
; Sources Used: N/A
;=====================================
*/

// imports 
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    DragDropModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    TaskManagementRoutingModule
  ]
})
export class TaskManagementModule { }
