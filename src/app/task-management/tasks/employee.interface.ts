/*
======================================
; Title: employee.interface.ts
; Author: Chris Gorham
; Date Created: 23 August 2023
; Last Updated: 23 August 2023
; Description: This code supports the Employee Interface
; Sources Used: Bellevue University WEB-450 GitHub
;=====================================
*/

// imports
import { Item } from "./item.interface";

// export
export interface Employee {
    empId: number
    todo: Item[]
    done: Item[]
}

