/*
======================================
; Title: item.interface.ts
; Author: Chris Gorham
; Date Created: 23 August 2023
; Last Updated: 23 August 2023
; Description: This code supports the Item Interface
; Sources Used: Bellevue University WEB-450 GitHub
;=====================================
*/

// exports
export interface Category {
    categoryName: string
    backgroundColor: string
}

export interface Item {
    _id?: string //optional property
    text: string
    category: Category
}