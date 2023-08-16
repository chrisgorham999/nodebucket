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

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';

@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
