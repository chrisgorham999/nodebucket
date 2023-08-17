/*
======================================
; Title: security.module.ts
; Author: Chris Gorham
; Date Created: 15 August 2023
; Last Updated: 15 August 2023
; Description: This code supports the Security Module
; Sources Used: Bellevue University WEB-450 GitHub
;=====================================
*/

// import statements
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    SecurityComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
