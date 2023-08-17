/*
======================================
; Title: security.service.ts
; Author: Chris Gorham
; Date Created: 16 August 2023
; Last Updated: 17 August 2023
; Description: This code supports the Security Service
; Sources Used: N/A
;=====================================
*/

// imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

    // function that returns an employee by ID number
  findEmployeeById(empId: number) {
    return this.http.get('/api/employees/' + empId)
  }
}
